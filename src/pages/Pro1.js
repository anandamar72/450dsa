import React, { useState, useEffect, useContext } from "react";
 

function Pro1({ data, id }) {
  useEffect(() => {
    (async () => {
      const res = await localStorage.getItem(`striver${data.position}`);
      const states = await JSON.parse(res);

      setCheckBoxState(states?.checkBoxState);
      setCheckNum(states?.checkNum);
    })();
  }, []);
  const [clicked, setClicked] = useState(false);
  const questionlength = data.questions.length;

  function is_checked(index) {
    let temp = clicked;
    temp = !temp;
    setClicked(temp);
  }

  const sum = (array) => {
    return array ? array.reduce((acc, cur) => acc + cur, 0) : 0;
  };

  var list = [];
  var num = [];
  const lowEnd = 1;
  const highEnd = 61;
  
  const [checkNum, setCheckNum] = useState(0);
  const [checkBoxState, setCheckBoxState] = useState(
    Array(questionlength).fill(false)
  );

  async function HandleCheck(index, position) {
    var templist = checkBoxState || [];
    var tempNum = checkNum;
    if (templist[index]) {
      setCheckNum(checkNum - 1);
    } else {
      setCheckNum(checkNum + 1);
    }
    templist[index] = !templist[index];
    setCheckBoxState(templist);
    await localStorage.setItem(
      `striver${position}`,
      JSON.stringify( {checkNum, checkBoxState })
    );
  }
  const [name, setName] = useState(false);

  function handleName() {
    var temp = name;
    temp = !temp;
    setName(temp);
    
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="my-1 w-full max-w-4xl">
          <button class="w-full flex rounded-lg px-4 py-2 border-2 border-blue-500 dark:border-white pl-28 hover:bg-blue-600 hover:text-blue-100 duration-300 text-black text-xl font-semibold dark:text-white text-left   " onClick={() => is_checked()}>
          <span className="w-100">{data.topicName}</span>
            <div className="text-[#000000] flex justify-between ml-auto mr-5 dark:text-white">
              <p>
                {sum(checkBoxState)}/{data.questions.length}{" "}
              </p>
            </div>
          </button>

          {clicked ? (
            <div class="w-full  px-4 py-2 border-2 border-black dark:border-white   text-black text-xl  dark:text-white  ">
            <table className="table w-full">
              <thead className="bg-[#92c9e6] h-10 outline hover:outline-2 rounded  dark:text-black">
                <th className="px-4">S.No</th>
                <th className="px-4">Problems</th>
                <th className="px-4">Status</th>
              </thead>
              {data.questions.map((question, index) => (
                <tbody key={index}>
                  <tr  className=" border-b-2 "> 
                    <td  className="p-1 px-4"  data-label="S.No"> {index + 1} </td>
  
                    <td className="px-4 text-blue-900 dark:text-white"  data-label="Problems">
                      <a href={question.Question_link} target="_blank" rel="noreferrer">
                        {question.Question}
                      </a>
                    </td>
                    <td className="item-center justify-center flex"  data-label="Status">
                      <div className="status">
                        {checkBoxState &&  checkBoxState[index] ? (
                          <input
                            className="Stat"
                            type="checkbox"
                            value={name}
                            onChange={() => handleName()}
                            onClick={() => HandleCheck(index, data.position)}
                            checked={true}
                          />
                        ) : (
                          <input
                            className="Stat"
                            type="checkbox"
                            value={name}
                            onChange={() => handleName()}
                            onClick={() => HandleCheck(index, data.position)}
                          />
                        )}
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Pro1;
