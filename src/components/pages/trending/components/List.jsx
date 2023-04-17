import React, { useState } from 'react'

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Trending from './Trending'

const FACULTIES = [
  'Ciencias Economicas y Juridicas',
  'Ciencias de la Salud',
  'Ciencias Basicas',
  'Ingenieria',
  'Educacion',
  'Agronoma',
]

const List = () => {
  const [currentTab, setCurrentTab] = useState(0)

  return (
    <React.Fragment>
      <div className="mt-4 bg-white py-4 px-7 transition-all">
        <Tabs onSelect={(e) => setCurrentTab(e)}>
          <TabList>
            {FACULTIES.map((val, idx) => (
              <Tab
                key={val}
                style={{
                  ...(currentTab === idx && {
                    backgroundColor: '#4ade80',
                    color: '#fff',
                    fontWeight: 'bold',
                  }),
                }}
              >
                {val}
              </Tab>
            ))}
          </TabList>

          {FACULTIES.map((val, idx) => (
            <TabPanel key={idx}>
              <Trending faculty={val} />
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </React.Fragment>
  )
}

export default List
