import React, { useContext, useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import styles from "./IdePage.module.css";
import MonacoEditor from "../../components/Ide/MonacoEditor";
import ProblemContent from "../../components/Ide/ProblemContent";
import InputOutput from "../../components/Ide/InputOutput";
import { EditorContext } from "../../contexts/EditorContext";
// import MyListContainer from "../../components/myList/MyListContainer";
import MyListContainer from "../../components/myList/TestModal";

export default function IdePage() {
  const [executionResult, setExecutionResult] = useState("");
  const { editor } = useContext(EditorContext);
  const [problems, setProblems] = useState(null);
  const [isMyListVisible, setIsMyListVisible] = useState(false);
  // const containerRef = useRef(null); // 외부 클릭 감지

  const getUserIDProblemId = () => {
    const path = window.location.pathname;
    const segments = path.split("/").filter(Boolean);
    const problemId = segments.slice(-1);
    const userId = segments.slice(-2, -1);

    return { problemId, userId };
  };
  const { userId, problemId } = getUserIDProblemId();

  useEffect(() => {
    fetch(`http://localhost:8080/api/problems/ide/${userId}/${problemId}`)
      .then(response => response.json())
      .then(data => {
        setProblems(data.problems);
        console.log(`userId: ${userId}, problemId: ${problemId}`);
        // setProblems(data.information);
      })
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = () => {
    fetch(`http://localhost:8080/solve/${userId}/${problemId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ usercode: editor }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.information);
        const { state } = data.information;
        setExecutionResult(state);
      })
      .catch(error => console.error("Error: ", error));
  };

  const toggleMyListVisible = () => {
    setIsMyListVisible(!isMyListVisible);
  };

  return (
    <div>
      <header className={styles.header}>
        <button
          type="button"
          aria-label="마이리스트 메뉴 열기 버튼"
          className={styles.myListMenuButton}
          onClick={toggleMyListVisible}
        >
          <CiMenuBurger />
        </button>
        {isMyListVisible && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              zIndex: 999,
            }}
          >
            <MyListContainer onClose={() => setIsMyListVisible(false)} />
          </div>
        )}
        {problems && (
          <>
            <h2 className={styles.problemTitle}>{problems.title}</h2>
            <span className={styles.problemLevel}>Lv. {problems.level}</span>
          </>
        )}
      </header>
      <div className={styles.container}>
        <section className={styles.problemInfoContainer}>
          {problems && (
            <ProblemContent type="문제 설명" content={problems.content} />
          )}
          {problems &&
            problems.testCases.map((testCase, index) => (
              <InputOutput
                key={testCase.id}
                num={index}
                input={testCase.input}
                output={testCase.output}
              />
            ))}
        </section>
        <section className={styles.solveContainer}>
          <div className={styles.editorContainer}>
            <MonacoEditor userCode={problems?.usercode || ""} />
          </div>
          <div className={styles.executeResult}>
            <h4 className={styles.executeResultLabel}>실행 결과</h4>
            <div className={styles.executeResultContent}>{executionResult}</div>
          </div>
        </section>
      </div>
      <footer className={styles.footer}>
        <button
          type="button"
          aria-label="chattingButton"
          className={styles.chattingButton}
        >
          <IoChatboxEllipsesOutline className={styles.chattingIcon} />
        </button>
        <button
          type="button"
          className={styles.executeButton}
          onClick={handleSubmit}
        >
          제출 후 채점하기
        </button>
      </footer>
    </div>
  );
}
