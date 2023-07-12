import {React, useContext, useEffect, useState }from 'react';
import { Context } from '../components/context';

const Bachelors = () => {
  const [programFilter, setProgramFilter] = useState([]);
  const [ageFilter, setAgeFilter] = useState([]);
  const [languageFilter, setLanguageFilter] = useState([]);
  useContext(Context);

  const data = [
    { program: 'Computer', age: 20, language: 'English', image: 'computer.jpg', name: 'John Doe' },
    { program: 'Software', age: 21, language: 'Spanish', image: 'software.jpg', name: 'Jane Smith' },
    { program: 'Electrical', age: 23, language: 'English', image: 'electrical.jpg', name: 'Michael Johnson' },
    { program: 'Languages', age: 20, language: 'French', image: 'languages.jpg', name: 'Emily Wilson' },
    { program: 'Computer', age: 23, language: 'Spanish', image: 'computer.jpg', name: 'Alex Davis' },
    { program: 'Software', age: 21, language: 'English', image: 'software.jpg', name: 'Sarah Brown' }
  ];

  const handleProgramFilterChange = (e) => {
    const selectedProgram = e.target.value;
    if (programFilter.includes(selectedProgram)) {
      setProgramFilter(programFilter.filter((program) => program !== selectedProgram));
    } else {
      setProgramFilter([...programFilter, selectedProgram]);
    }
  };

  const handleAgeFilterChange = (e) => {
    const selectedAge = e.target.value;
    if (ageFilter.includes(selectedAge)) {
      setAgeFilter(ageFilter.filter((age) => age !== selectedAge));
    } else {
      setAgeFilter([...ageFilter, selectedAge]);
    }
  };

  const handleLanguageFilterChange = (e) => {
    const selectedLanguage = e.target.value;
    if (languageFilter.includes(selectedLanguage)) {
      setLanguageFilter(languageFilter.filter((language) => language !== selectedLanguage));
    } else {
      setLanguageFilter([...languageFilter, selectedLanguage]);
    }
  };

  const clearFilters = () => {
    setProgramFilter([]);
    setAgeFilter([]);
    setLanguageFilter([]);
  };

  const filteredData = data.filter((item) => {
    if (programFilter.length > 0 && !programFilter.includes(item.program)) {
      return false;
    }
    if (ageFilter.length > 0 && !ageFilter.includes(String(item.age))) {
      return false;
    }
    if (languageFilter.length > 0 && !languageFilter.includes(item.language)) {
      return false;
    }
    return true;
  });

  return (
    
    <div>
      <h1 style={{ marginBottom: '1rem', fontWeight: 'bold', fontSize: '50px' }}>Our Eligible Bachelors</h1>
      {/* Title added here */}
      <div style={{ display: 'flex' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginRight: '32px',
            width: '500px',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h2 style={{ marginBottom: '1rem', fontWeight: 'bold', fontSize: '20px' }}>
            SITE Bachelors ({filteredData.length})
          </h2>
          <div style={{ marginBottom: '1rem' }}>
            <label>Program:</label>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={programFilter.includes('Computer')}
                  onChange={handleProgramFilterChange}
                  value="Computer"
                />
                Computer
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={programFilter.includes('Software')}
                  onChange={handleProgramFilterChange}
                  value="Software"
                />
                Software
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={programFilter.includes('Electrical')}
                  onChange={handleProgramFilterChange}
                  value="Electrical"
                />
                Electrical
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={programFilter.includes('Languages')}
                  onChange={handleProgramFilterChange}
                  value="Languages"
                />
                Languages
              </label>
            </div>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Age:</label>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={ageFilter.includes('20')}
                  onChange={handleAgeFilterChange}
                  value="20"
                />
                20
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={ageFilter.includes('21')}
                  onChange={handleAgeFilterChange}
                  value="21"
                />
                21
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={ageFilter.includes('23')}
                  onChange={handleAgeFilterChange}
                  value="23"
                />
                23
              </label>
            </div>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Language:</label>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={languageFilter.includes('English')}
                  onChange={handleLanguageFilterChange}
                  value="English"
                />
                English
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={languageFilter.includes('Spanish')}
                  onChange={handleLanguageFilterChange}
                  value="Spanish"
                />
                Spanish
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={languageFilter.includes('French')}
                  onChange={handleLanguageFilterChange}
                  value="French"
                />
                French
              </label>
            </div>
          </div>
          <button onClick={clearFilters}>Clear Filters</button> {/* Clear Filters button */}
        </div>
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {filteredData.map((item, index) => (
              <div
                key={index}
                style={{
                  width: '300px',
                  border: '1px solid gray',
                  borderRadius: '8px',
                  padding: '16px',
                  margin: '16px'
                }}
              >
                <img src={item.image} alt={item.program} style={{ width: '100%', marginBottom: '8px' }} />
                <p>{item.name}</p>
                <p>Program: {item.program}</p>
                <p>Age: {item.age}</p>
                <p>Language: {item.language}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bachelors;
