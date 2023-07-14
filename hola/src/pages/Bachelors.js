import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

const Bachelors = () => {
  const { t, i18n } = useTranslation();
  
  const [programFilter, setProgramFilter] = useState([]);
  const [ageFilter, setAgeFilter] = useState([]);
  const [languageFilter, setLanguageFilter] = useState([]);

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
    <div style={{marginBottom:'50px' }}>
      <h1 style={{ marginTop:'100px',marginBottom: '1rem', fontWeight: 'bold', fontSize: '50px' }}>
      
      <div className="text-left ml-32 mb-12">
  <span className="text-black text-4xl font-bold">
    {t("BACHELORS.OurBachelors")}
  </span>
  <span className="text-orange-500 text-4xl font-bold">
    {t("BACHELORS.Bachelorspage")}
  </span>
  <p className="mt-4 text-lg text-gray-400">
    {t("BACHELORS.ParagraphText")}
  </p>
</div>
        </h1>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '250px', marginLeft:'80px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
            <h2 style={{ marginBottom: '1rem', fontWeight: 'bold', fontSize: '20px' }}>
              SITE Bachelors ({filteredData.length})
            </h2>
            <div style={{ marginBottom: '1rem',marginRight: '50px' }}>
              <label>Program:</label> 
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={programFilter.includes('Computer')}
                    onChange={handleProgramFilterChange}
                    value="Computer"
                    color='#FF6600'
                    backgroundColor='#FF6600'
                  />
                  <span style={{ marginLeft: '4px' }}>Computer</span>
                </label>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={programFilter.includes('Software')}
                    onChange={handleProgramFilterChange}
                    value="Software"
                  />
                  <span style={{ marginLeft: '4px' }}>Software</span>
                </label>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={programFilter.includes('Electrical')}
                    onChange={handleProgramFilterChange}
                    value="Electrical"
                  />
                  <span style={{ marginLeft: '4px' }}>Electrical</span>
                </label>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={programFilter.includes('Languages')}
                    onChange={handleProgramFilterChange}
                    value="Languages"
                  />
                  <span style={{ marginLeft: '4px' }}>Languages</span>
                </label>
              </div>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label>Age:</label>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={ageFilter.includes('20')}
                    onChange={handleAgeFilterChange}
                    value="20"
                    color="orange"
                  />
                  <span style={{ marginLeft: '4px' }}>20</span>
                </label>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={ageFilter.includes('21')}
                    onChange={handleAgeFilterChange}
                    value="21"
                  />
                  <span style={{ marginLeft: '4px' }}>21</span>
                </label>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={ageFilter.includes('23')}
                    onChange={handleAgeFilterChange}
                    value="23"
                  />
                  <span style={{ marginLeft: '4px' }}>23</span>
                </label>
              </div>
            </div>
            <div>
              <label>Language:</label>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={languageFilter.includes('English')}
                    onChange={handleLanguageFilterChange}
                    value="English"
                  />
                  <span style={{ marginLeft: '4px' }}>English</span>
                </label>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={languageFilter.includes('Spanish')}
                    onChange={handleLanguageFilterChange}
                    value="Spanish"
                  />
                  <span style={{ marginLeft: '4px' }}>Spanish</span>
                </label>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={languageFilter.includes('French')}
                    onChange={handleLanguageFilterChange}
                    value="French"
                  />
                  <span style={{ marginLeft: '4px' }}>French</span>
                </label>
              </div>
            </div>
            <button
  onClick={clearFilters}
  style={{
    borderRadius: '9999px',
    backgroundColor: '#FF6600',
    padding: '0.5rem 1rem',
    fontWeight: '600',
    color: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
    borderColor:'#FF6600',
    marginTop:'20px',
  }}
>
  Clear Filters
</button>


          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', marginRight:'50px' }}>
          {filteredData.map((item, index) => (
            <div
              key={index}
              style={{
                flex: '0 0 auto',
                width: 'calc(33.33% - 40px)',
                height: '200px',
                border: '1px solid gray',
                borderRadius: '8px',
                padding: '16px',
                margin: '16px',
                position: 'relative'
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
  );
};

export default Bachelors;
