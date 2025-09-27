import React from 'react';
import Container from '../Others/Container';
import calenderIcon from '../../assets/calendar-line.png';

const Card = ({
  onCardClick,
  selectedIssues,
  onComplete,
  tickets,
  resolvedIssues,
}) => {
  return (
    <Container>
      <div className="grid grid-cols-12 gap-2 mx-2 md:mx-0">
        <h1 className="grid col-span-full md:col-span-10 my-4 text-2xl font-medium text-[#34485a]">
          Customer Tickets
        </h1>
        <h1 className="grid col-span-full md:col-span-2 my-4 text-2xl font-medium text-[#34485a]">
          Task Status
        </h1>
      </div>
      <div className="grid col-span-full md:grid-cols-12 gap-2">
        <div className="grid col-span-10 grid-cols-1 md:grid-cols-2 mx-2 md:mx-0 gap-4">
          {tickets.map(issue => {
            return (
              <div
                key={issue.id}
                className="shadow-md rounded-md cursor-pointer bg-white p-5"
                onClick={() => onCardClick(issue)}
              >
                <div className="">
                  <div className="flex justify-between items-center my-4">
                    <h1 className="text-xl font-semibold">{issue.title}</h1>
                    <button
                      className={`btn rounded-full ${
                        issue.status == 'Open'
                          ? 'bg-[#b9f8cf] text-[#0b5e06]'
                          : 'bg-[#f8f3b9] text-[#9c7700]'
                      }`}
                    >
                      <div
                        className={`h-4 w-4 ${
                          issue.status == 'Open'
                            ? 'bg-[#02a53b]'
                            : 'bg-[#febb0c]'
                        } rounded-full`}
                      ></div>
                      {issue.status}
                    </button>
                  </div>
                  <p className="text-gray-500 text-sm md:text-base mb-2">
                    {issue.description}
                  </p>
                  <div className="flex justify-between items-center text-gray-500">
                    <div className="flex gap-3">
                      <p className="text-gray-500 text-sm md:text-base">
                        #{issue.id}
                      </p>
                      <p
                        className={`uppercase font-medium text-sm md:text-base  ${
                          issue.priority == 'High Priority'
                            ? 'text-red-500'
                            : issue.priority == 'Medium Priority'
                            ? 'text-yellow-500'
                            : 'text-green-500'
                        }`}
                      >
                        {issue.priority}
                      </p>
                    </div>
                    <div className="flex gap-3 text-sm md:text-base">
                      <p>{issue.customer}</p>
                      <div className="flex gap-1">
                        <img className="" src={calenderIcon} alt="" />
                        <p className="text-sm md:text-base">
                          {issue.createdAt}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* // Right side */}
        <div className="grid col-span-12 md:col-span-2 content-start">
          {selectedIssues.length === 0 && (
            <p className="text-gray-500 text-sm">
              Select a ticket to add to Task Status
            </p>
          )}

          <div className="space-y-4">
            {selectedIssues.map(issue => (
              <div
                key={issue.id}
                className="border border-gray-200 rounded-md p-2 flex flex-col space-y-2"
              >
                <h3 className="font-medium">{issue.title}</h3>
                <button
                  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition cursor-pointer"
                  onClick={() => onComplete(issue)}
                >
                  Complete
                </button>
              </div>
            ))}
          </div>

          {/* // Resolved Task */}
          <div className="flex flex-col mt-10 space-y-2 mx-2 md:mx-0">
            <h1 className="text-2xl font-medium text-[#34485a]">
              Resolved Task
            </h1>
            {resolvedIssues.length === 0 && (
              <p className="text-gray-500 text-sm">No resolved tasks yet.</p>
            )}

            <div className=''>
              {resolvedIssues.map(issue => (
                <div
                  key={issue.id}
                  className="border border-green-200 bg-green-50 rounded-md p-2 text-black-700 font-medium mb-1.5"
                >
                  {issue.title}
                  <p className="text-green-600 text-sm">Completed</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Card;
