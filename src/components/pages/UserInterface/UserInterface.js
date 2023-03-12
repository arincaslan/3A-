import {React, useState} from 'react';
import { Button } from '@mui/material';
import './UserInterface.css';
import RecentReports from '../../Tools/ReportsSlider/RecentReports';

function UserInterface() {
    const [reportData, setReportData] = useState([
        {
          id: 1,
          title: 'Rapor 1',
          description: 'Lorem ipsum dolor sit amet',
          date: '2022-03-01',
          thumbnail: 'https://via.placeholder.com/150',
          author: 'John Doe'
        },
        {
          id: 2,
          title: 'Rapor 2',
          description: 'Consectetur adipiscing elit',
          date: '2022-03-02',
          thumbnail: 'https://via.placeholder.com/150',
          author: 'Jane Doe'
        },
        {
          id: 3,
          title: 'Rapor 3',
          description: 'Sed do eiusmod tempor incididunt',
          date: '2022-03-03',
          thumbnail: 'https://via.placeholder.com/150',
          author: 'Max Mustermann'
        }
      ]);
  return (
    <div>
    <div className="ui-container">
      <div className="ui-image">
        <img src="https://example.com/image.png" alt="Example Image" />
      </div>
      <div className="ui-info">
        <h2>Welcome to Our Platform</h2>
        <p>Here's some information about our platform and what it can do for you.</p>
        <div className="ui-buttons">
          <Button variant="contained" color="primary">Create Report</Button>
          <Button variant="outlined" color="primary">My Reports</Button>
          <Button variant="outlined" color="primary">My Profile</Button>
          <Button variant="contained" color="secondary">Logout</Button>
        </div>
      </div>
    </div>
    <RecentReports reports={reportData}/>
    </div>
  );
}

export default UserInterface;
