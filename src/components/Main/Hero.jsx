import React, { use, useState } from 'react';
import Box from './Box';
import Card from './Card';
import { toast } from 'react-toastify';

const Hero = ({ fetchPromise }) => {
  const initialData = use(fetchPromise);

  const [tickets, setTickets] = useState(initialData);
  const [selectedIssues, setSelectedIssues] = useState([]);
  const [resolvedIssues, setResolvedIssues] = useState([]);

  const handleCardClick = issue => {
    const alreadySelected = selectedIssues.find(i => i.id === issue.id);
    if (alreadySelected) {
      toast('⚠️ Already Added!', {
        position: 'top-right',
        autoClose: 3000,
        style: { backgroundColor: 'white', color: 'black', fontWeight: 'bold' },
        icon: '⚠️',
      });
      return;
    }

    toast('✅ In Progress!', {
      position: 'top-right',
      autoClose: 3000,
      style: { backgroundColor: 'white', color: 'black', fontWeight: 'bold' },
      icon: '✅',
    });

    setSelectedIssues(prev => [...prev, issue]);
  };

  // Complete a task
  const handleComplete = issue => {
    setSelectedIssues(prev => prev.filter(i => i.id !== issue.id));
    setResolvedIssues(prev => [...prev, issue]);
    setTickets(prev => prev.filter(i => i.id !== issue.id));
    toast('Complete!✅', {
      position: 'top-right',
      autoClose: 2000,
      style: { backgroundColor: 'white', color: 'black', fontWeight: 'bold' },
      icon: '✅',
    });
  };

  return (
    <div className="bg-[#f5f5f5] py-10">
      <Box
        count={selectedIssues.length}
        resolvedCount={resolvedIssues.length}
      />

      <Card
        tickets={tickets}
        onCardClick={handleCardClick}
        selectedIssues={selectedIssues}
        onComplete={handleComplete}
        resolvedIssues={resolvedIssues}
      />
    </div>
  );
};

export default Hero;
