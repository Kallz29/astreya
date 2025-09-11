import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { Plus, Trash2 } from "lucide-react";

const QuestLogPage = () => {
  const [quests, setQuests] = useState([]);
  const [newQuest, setNewQuest] = useState("");
  const [newStep, setNewStep] = useState({});
  const isDM = sessionStorage.getItem("dmAuthenticated") === "true";

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "quests"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQuests(data);
    });
    return () => unsub();
  }, []);

  const addQuest = async () => {
    if (!newQuest.trim()) return;
    await addDoc(collection(db, "quests"), {
      title: newQuest,
      steps: [],
    });
    setNewQuest("");
  };

  const addStep = async (questId) => {
    if (!newStep[questId]?.trim()) return;
    const quest = quests.find((q) => q.id === questId);
    const updatedSteps = [
      ...quest.steps,
      { text: newStep[questId], completed: false },
    ];
    await updateDoc(doc(db, "quests", questId), { steps: updatedSteps });
    setNewStep((prev) => ({ ...prev, [questId]: "" }));
  };

  const toggleStep = async (questId, idx) => {
    if (!isDM) return;
    const quest = quests.find((q) => q.id === questId);
    const updatedSteps = [...quest.steps];
    updatedSteps[idx].completed = !updatedSteps[idx].completed;
    await updateDoc(doc(db, "quests", questId), { steps: updatedSteps });
  };

  const removeStep = async (questId, idx) => {
    if (!isDM) return;
    const quest = quests.find((q) => q.id === questId);
    const updatedSteps = quest.steps.filter((_, i) => i !== idx);
    await updateDoc(doc(db, "quests", questId), { steps: updatedSteps });
  };

  const removeQuest = async (questId) => {
    if (!isDM) return;
    await deleteDoc(doc(db, "quests", questId));
  };

  return (
    <div className="quest-log">
      <h1>📜 Quest Log</h1>

      {isDM && (
        <div className="add-quest-form">
          <input
            type="text"
            value={newQuest}
            onChange={(e) => setNewQuest(e.target.value)}
            placeholder="New quest..."
          />
          <button onClick={addQuest}>
            <Plus size={16} /> Add Quest
          </button>
        </div>
      )}

      <ul>
        {quests.map((quest) => {
          const completed = quest.steps.filter((s) => s.completed).length;
          const progress =
            quest.steps.length > 0
              ? Math.round((completed / quest.steps.length) * 100)
              : 0;

          return (
            <li
              key={quest.id}
              className={`quest ${
                progress === 100 ? "completed" : "active"
              }`}
            >
              <div className="quest-header">
                <h2>{quest.title}</h2>
                {isDM && (
                  <button
                    className="remove-btn"
                    onClick={() => removeQuest(quest.id)}
                  >
                    <Trash2 size={18} />
                  </button>
                )}
              </div>

              {/* Progress Bar */}
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* Steps */}
              <ul className="quest-steps">
                {quest.steps.map((step, idx) => (
                  <li key={idx} className="step-item">
                    <label>
                      <input
                        type="checkbox"
                        checked={step.completed}
                        onChange={() => toggleStep(quest.id, idx)}
                        disabled={!isDM}
                      />{" "}
                      <span
                        style={{
                          textDecoration: step.completed
                            ? "line-through"
                            : "none",
                          opacity: step.completed ? 0.7 : 1,
                        }}
                      >
                        {step.text}
                      </span>
                    </label>

                    {isDM && (
                      <button
                        className="remove-btn"
                        onClick={() => removeStep(quest.id, idx)}
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </li>
                ))}
              </ul>

              {isDM && (
                <div className="add-step-form">
                  <input
                    type="text"
                    value={newStep[quest.id] || ""}
                    onChange={(e) =>
                      setNewStep((prev) => ({
                        ...prev,
                        [quest.id]: e.target.value,
                      }))
                    }
                    placeholder="New step..."
                  />
                  <button onClick={() => addStep(quest.id)}>
                    <Plus size={16} /> Add Step
                  </button>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuestLogPage;
