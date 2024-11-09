import React, { useState } from 'react';
import './SupportGroups.css';
const SupportGroups = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [groups, setGroups] = useState([
    {
      id: 1,
      name: 'Anxiety Support Group',
      description: 'A safe space to share and manage anxiety.',
      meetingType: 'Virtual',
      schedule: 'Every Monday, 6 PM',
      members: 32,
    },
    {
      id: 2,
      name: 'Parenting Support Group',
      description: 'Connect with parents and share parenting tips.',
      meetingType: 'In-person',
      schedule: 'Every Saturday, 10 AM',
      members: 20,
    },
    // Add more mock groups as needed
  ]);
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredGroups = groups.filter(group =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="support-groups">
      {/* Header Section */}
      <div className="header">
        <h1>Support Groups</h1>
        <input
          type="text"
          placeholder="Search groups..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
        <button className="filter-button">Filter</button>
      </div>

      {/* Featured Groups Carousel (Optional) */}
      <div className="featured-groups">
        {/* Code for carousel if needed */}
      </div>

      {/* List of Support Groups */}
      <div className="group-list">
        {filteredGroups.length ? (
          filteredGroups.map((group) => (
            <div key={group.id} className="group-card">
              <h2>{group.name}</h2>
              <p>{group.description}</p>
              <p>Meeting Type: {group.meetingType}</p>
              <p>Schedule: {group.schedule}</p>
              <p>Members: {group.members}</p>
              <button className="join-button">Join</button>
              <button className="contact-button">Contact</button>
            </div>
          ))
        ) : (
          <p>No support groups found. Try adjusting your search or filters.</p>
        )}
      </div>
    </div>
  );
};

export default SupportGroups;
