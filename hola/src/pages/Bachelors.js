import React, { useState, useEffect } from 'react';
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
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);

  const [programFilter, setProgramFilter] = useState([]);
  const [ageFilter, setAgeFilter] = useState([]);
  const [languageFilter, setLanguageFilter] = useState([]);

  const data = [
    { program: t('Electrical'), age: t('Age20'), language: t('German'), image: Sven, name: 'Sven' },
    { program: t('Computer'), age: t('Age20'), language: t('Bilingual'), image: Carl, name: 'Carl' },
    { program: t('Electrical'), age: t('Age19'), language: t('Bilingual'), image: Joshua, name: 'Joshua' },
    { program: t('Software'), age: t('Age20'), language: t('Bilingual'), image: Diana, name: 'Diana' },
    { program: t('Computer'), age: t('Age21'), language: t('Spanish'), image: Mario, name: 'Mario' },
    { program: t('Computer Science'), age: t('Age23'), language: t('Portuguese'), image: Ruperto, name: 'Ruperto' },
    { program: t('Electrical'), age: t('Age21'), language: t('Bilingual'), image: Nic, name: 'Nic' },
    { program: t('Software'), age: t('Age21'), language: t('Italian'), image: Antonella, name: 'Antonella' },
    { program: t('Mechanical'), age: t('Age22'), language: t('Spanish'), image: Efrain, name: 'Efrain' },
    { program: t('Electrical'), age: t('Age20'), language: t('Bilingual'), image: Steve, name: 'Steve' },
    { program: t('Computer'), age: t('Age21'), language: t('Bilingual'), image: Rick, name: 'Rick' },
    { program: t('Mechanical'), age: t('Age22'), language: t('Portuguese'), image: Claudette, name: 'Claudette' }
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
              {t("SITEBACHELORS")} ({filteredData.length})
            </h2>
            <div style={{ marginBottom: '1rem',marginRight: '50px' }}>
              <label>{t("ProgramEng")}</label> 
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={programFilter.includes(t('Computer'))}
                    onChange={handleProgramFilterChange}
                    value={t('Computer')}
                    color='#FF6600'
                    backgroundColor='#FF6600'
                  />
                  <span style={{ marginLeft: '4px' }}>{t('Computer')}</span>
                </label>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={programFilter.includes(t('Software'))}
                    onChange={handleProgramFilterChange}
                    value={t('Software')}
                  />
                  <span style={{ marginLeft: '4px' }}>{t('Software')}</span>
                </label>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={programFilter.includes(t('Electrical'))}
                    onChange={handleProgramFilterChange}
                    value={t('Electrical')}
                  />
                  <span style={{ marginLeft: '4px' }}>{t('Electrical')}</span>
                </label>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={programFilter.includes(t('Mechanical'))}
                    onChange={handleProgramFilterChange}
                    value={t('Mechanical')}
                  />
                  <span style={{ marginLeft: '4px' }}>{t('Mechanical')}</span>
                </label>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={programFilter.includes(t('CompSci'))}
                    onChange={handleProgramFilterChange}
                    value={t('CompSci')}
                  />
                  <span style={{ marginLeft: '4px' }}>{t('CompSci')}</span>
                </label>
              </div>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label>{t("AgeLabel")}</label>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={ageFilter.includes(t('Age19'))}
                    onChange={handleAgeFilterChange}
                    value={t('Age19')}
                    color="orange"
                  />
                  <span style={{ marginLeft: '4px' }}>{t('Age19')}</span>
                </label>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={ageFilter.includes(t('Age20'))}
                    onChange={handleAgeFilterChange}
                    value={t('Age20')}
                    color="orange"
                  />
                  <span style={{ marginLeft: '4px' }}>{t('Age20')}</span>
                </label>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={ageFilter.includes(t('Age21'))}
                    onChange={handleAgeFilterChange}
                    value={t('Age21')}
                  />
                  <span style={{ marginLeft: '4px' }}>{t('Age21')}</span>
                </label>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={ageFilter.includes(t('Age22'))}
                    onChange={handleAgeFilterChange}
                    value={t('Age22')}
                    color="orange"
                  />
                  <span style={{ marginLeft: '4px' }}>{t('Age22')}</span>
                </label>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={ageFilter.includes(t('Age23'))}
                    onChange={handleAgeFilterChange}
                    value={t('Age23')}
                  />
                  <span style={{ marginLeft: '4px' }}>{t('Age23')}</span>
                </label>
              </div>
            </div>
            <div>
              <label>{t("LanguageLabel")}</label>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={languageFilter.includes(t('Bilingual'))}
                    onChange={handleLanguageFilterChange}
                    value={t('Bilingual')}
                  />
                  <span style={{ marginLeft: '4px' }}>{t('Bilingual')}</span>
                </label>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={languageFilter.includes(t('Portuguese'))}
                    onChange={handleLanguageFilterChange}
                    value={t('Portuguese')}
                  />
                  <span style={{ marginLeft: '4px' }}>{t('Portuguese')}</span>
                </label>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={languageFilter.includes(t('Italian'))}
                    onChange={handleLanguageFilterChange}
                    value={t('Italian')}
                  />
                  <span style={{ marginLeft: '4px' }}>{t('Italian')}</span>
                </label>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={languageFilter.includes(t('German'))}
                    onChange={handleLanguageFilterChange}
                    value={t('German')}
                  />
                  <span style={{ marginLeft: '4px' }}>{t('German')}</span>
                </label>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={languageFilter.includes(t('Spanish'))}
                    onChange={handleLanguageFilterChange}
                    value={t('Spanish')}
                  />
                  <span style={{ marginLeft: '4px' }}>{t('Spanish')}</span>
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
              {t('ClearFilters')}
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
              <p>{t('ProgramEng')}: {item.program}</p>
              <p>{t('AgeLabel')}: {item.age}</p>
              <p>{t('LanguageLabel')}: {item.language}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bachelors;
