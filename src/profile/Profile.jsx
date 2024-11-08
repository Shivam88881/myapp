import React from 'react';
import './profile.scss';
import Avatar from '@mui/material/Avatar';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Calendar from '../calendar/Calendar';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';




export default function Profile() {



  // const data = [
  //   {
  //     date: "2021-02-20",
  //     count: 16,
  //   },
  //   {
  //     date: "2021-02-21",
  //     count: 16,
  //   },
  //   {
  //     date: "2021-02-22",
  //     count: 16,
  //   },
  //   {
  //     date: "2021-02-23",
  //     count: 16,
  //   },
  //   {
  //     date: "2021-02-24",
  //     count: 16,
  //   },
  // ]

  return (
    <div className='profile'>
      <div className="profile-detail d-flex flex-wrap align-items-center justify-content-center">
        <div className='profile-detail-container-1'>
          <div>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 150, height: 150 }}
            />
            <p >@{`shivam88881`}</p>
            <p style={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem', fontFamily: '"Noto Serif", serif' }}><EmojiEventsIcon /> <span>{`1 Rank`}</span></p>
            <p >{`Accuracy: 60%`}</p>
          </div>
          <div className='d-flex flex-wrap mt-3 p-3'>
            <div className='active-day mx-2' style={{ background: `conic-gradient( red 60deg,rgba(0, 0, 0, 0.05) 0deg)` }}>
              <div>
                <p>{`Active`}</p>
                <span>{`60/360`}</span>
              </div>
            </div>

            <div className='contest-taken mx-2' style={{ background: `conic-gradient( red 60deg,rgba(0, 0, 0, 0.05) 0deg)` }}>
              <div>
                <p>{`Contest`}</p>
                <span>{`60/360`}</span>
              </div>
            </div>

          </div>
        </div>

        <div className='profile-detail-container-2'>
          <div className="basic-info">
            <div>
              <h6>Institute</h6>
              <p>{`Jadavpur University`}</p>
            </div>
            <div>
              <h6>State</h6>
              <p>{`Bihar`}</p>
            </div>
          </div>
          <div className="practice-info">
            <div className='solved-problem mx-2' style={{ background: `conic-gradient( red 60deg,rgba(0, 0, 0, 0.05) 0deg)` }}>
              <div>
                <p>{`Solved`}</p>
                <span>{`60/360`}</span>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={2}
                  justifyContent="space-evenly"
                >
                  <h6>{`Subject`}</h6>
                  <h6>{`Solved`}</h6>
                </Stack>
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={2}
                  justifyContent="space-evenly"
                  // alignContent= "end"
                >
                  <p style={{textAlign: 'left'}}>
                    <span>{'Math'}</span>
                    <div className='subject-wise-soved-problem'>
                      <div style={{backgroundColor: `green`,width:`50%`}}></div>
                    </div>
                    </p>
                    <p style={{margin: `0`,paddingTop: `8px`,display: 'grid',}}>{`50/100`}</p>
                </Stack>
              </div>
            </div>
          </div>
        </div>

        <div className='profile-detail-container-3'>
          <Calendar />
        </div>

      </div>

      
    </div>
  );
}
