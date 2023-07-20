import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import Sven from "../IMAGES/sven.png";
import Carl from "../IMAGES/carl.png";
import Joshua from "../IMAGES/joshua.png";
import Diana from "../IMAGES/diana.png";
import Mario from "../IMAGES/mario.png";
import Claudette from "../IMAGES/claudette.png";
import Rick from "../IMAGES/rick.png";
import Antonella from "../IMAGES/antonella.png";
import Ruperto from "../IMAGES/ruperto.png";
import Efrain from "../IMAGES/efrain.png";
import Nic from "../IMAGES/nic.png";
import Steve from "../IMAGES/steve.png";

const Bachelors = () => {
  const { t, i18n } = useTranslation();
  
  const [programFilter, setProgramFilter] = useState([]);
  const [ageFilter, setAgeFilter] = useState([]);
  const [languageFilter, setLanguageFilter] = useState([]);

  const data = [
    { program: 'Electrical Engineer', age: 20, language: 'German', image: Sven, name: 'Sven' },
    { program: 'Computer Engineer', age: 20, language: 'Bilingual', image: Carl, name: 'Carl' },
    { program: 'Electrical Engineer', age: 19, language: 'Bilingual', image: Joshua, name: 'Joshua' },
    { program: 'Chemical Engineer', age: 20, language: 'Bilingual', image: Diana, name: 'Diana' },
    { program: 'Computer Engineer', age: 21, language: 'Spanish', image: Mario, name: 'Mario' },
    { program: 'Computer Science', age: 23, language: 'Portuguese', image: Ruperto, name: 'Ruperto' },
    { program: 'Electrical Engineer', age: 21, language: 'Bilingual', image: Nic, name: 'Nic' },
    { program: 'Software Engineer', age: 21, language: 'Italian', image: Antonella, name: 'Antonella' },
    { program: 'Mechanical Engineer', age: 22, language: 'Catalan', image: Efrain, name: 'Efrain' },
    { program: 'Electrical Engineer', age: 20, language: 'Bilingual', image: Steve, name: 'Steve' },
    { program: 'Computer Engineer', age: 21, language: 'Bilingual', image: Rick, name: 'Rick' },
    { program: 'Mechanical Engineer', age: 22, language: 'Arab', image: Claudette, name: 'Claudette' }
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
              <label>Program (Eng):</label> 
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={programFilter.includes('Computer Engineer')}
                    onChange={handleProgramFilterChange}
                    value="Computer Engineer"
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
                    checked={programFilter.includes('Software Engineer')}
                    onChange={handleProgramFilterChange}
                    value="Software Engineer"
                  />
                  <span style={{ marginLeft: '4px' }}>Software</span>
                </label>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={programFilter.includes('Electrical Engineer')}
                    onChange={handleProgramFilterChange}
                    value="Electrical Engineer"
                  />
                  <span style={{ marginLeft: '4px' }}>Electrical</span>
                </label>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={programFilter.includes('Mechanical Engineer')}
                    onChange={handleProgramFilterChange}
                    value="Mechanical Engineer"
                  />
                  <span style={{ marginLeft: '4px' }}>Mechanical</span>
                </label>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={programFilter.includes('Computer Science')}
                    onChange={handleProgramFilterChange}
                    value="Computer Science"
                  />
                  <span style={{ marginLeft: '4px' }}>Comp Sci</span>
                </label>
              </div>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label>Age:</label>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={ageFilter.includes('19')}
                    onChange={handleAgeFilterChange}
                    value="19"
                    color="orange"
                  />
                  <span style={{ marginLeft: '4px' }}>19</span>
                </label>
              </div>
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
                    checked={ageFilter.includes('22')}
                    onChange={handleAgeFilterChange}
                    value="22"
                    color="orange"
                  />
                  <span style={{ marginLeft: '4px' }}>22</span>
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
                    checked={languageFilter.includes('Bilingual')}
                    onChange={handleLanguageFilterChange}
                    value="Bilingual"
                  />
                  <span style={{ marginLeft: '4px' }}>Bilingual</span>
                </label>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={languageFilter.includes('Portuguese')}
                    onChange={handleLanguageFilterChange}
                    value="Portuguese"
                  />
                  <span style={{ marginLeft: '4px' }}>Portuguese</span>
                </label>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={languageFilter.includes('Italian')}
                    onChange={handleLanguageFilterChange}
                    value="Italian"
                  />
                  <span style={{ marginLeft: '4px' }}>Italian</span>
                </label>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={languageFilter.includes('German')}
                    onChange={handleLanguageFilterChange}
                    value="German"
                  />
                  <span style={{ marginLeft: '4px' }}>German</span>
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
                height: '500px',
                border: '1px solid gray',
                borderRadius: '8px',
                padding: '16px',
                margin: '16px',
                position: 'relative'
              }}
            >
              <img src={item.image} alt={item.program} style={{ width: '100%', height:'75%', marginBottom: '8px',  }} />
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
