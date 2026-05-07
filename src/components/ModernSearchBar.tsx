import React, { useState, useEffect, useRef } from 'react';

interface SearchData {
  from: string;
  to: string;
  departDate: string;
  returnDate: string;
  tripType: 'roundtrip' | 'oneway';
  adults: number;
  minors: number;
}

const ModernSearchBar: React.FC = () => {
  const [searchData, setSearchData] = useState<SearchData>({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    tripType: 'roundtrip',
    adults: 1,
    minors: 0
  });

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);

  // Refs for click outside detection
  const fromDropdownRef = useRef<HTMLDivElement>(null);
  const toDropdownRef = useRef<HTMLDivElement>(null);
  const travelersDropdownRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  // Sample data
  const locations = [
    'New York, USA (JFK)',
    'Los Angeles, USA (LAX)',
    'London, UK (LHR)',
    'Paris, France (CDG)',
    'Tokyo, Japan (NRT)',
    'Dubai, UAE (DXB)',
    'Singapore, Singapore (SIN)',
    'Sydney, Australia (SYD)'
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (fromDropdownRef.current && !fromDropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
      if (toDropdownRef.current && !toDropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
      if (travelersDropdownRef.current && !travelersDropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLocationSelect = (location: string, field: 'from' | 'to') => {
    setSearchData(prev => ({ ...prev, [field]: location }));
    setOpenDropdown(null);
  };

  const handleDateSelect = (departDate: string, returnDate?: string) => {
    setSearchData(prev => ({ 
      ...prev, 
      departDate,
      returnDate: returnDate || prev.returnDate 
    }));
    setShowCalendar(false);
  };

  const handleTravelersChange = (type: 'adults' | 'minors', delta: number) => {
    setSearchData(prev => ({
      ...prev,
      [type]: Math.max(type === 'adults' ? 1 : 0, prev[type] + delta)
    }));
  };

  const getTravelersDisplay = () => {
    const total = searchData.adults + searchData.minors;
    if (total === 1) return '1 Traveler';
    const parts = [];
    if (searchData.adults > 0) {
      parts.push(`${searchData.adults} Adult${searchData.adults === 1 ? '' : 's'}`);
    }
    if (searchData.minors > 0) {
      parts.push(`${searchData.minors} Minor${searchData.minors === 1 ? '' : 's'}`);
    }
    return parts.join(', ');
  };

  const getDateDisplay = () => {
    if (searchData.tripType === 'oneway') {
      return searchData.departDate || 'Depart';
    }
    if (searchData.departDate && searchData.returnDate) {
      return `${searchData.departDate} - ${searchData.returnDate}`;
    }
    return searchData.departDate || 'Select dates';
  };

  // Icons
  const locationIcon = (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 111.314 0l4.244 4.243a8 8 0 011.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  const calendarIcon = (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );

  const travelersIcon = (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div 
        className="flex items-center"
        style={{
          border: '1px solid #CBD4E6',
          borderRadius: '4px',
          backgroundColor: 'white',
          height: '48px'
        }}
      >
        {/* From Where Input */}
        <div className="relative flex-1" ref={fromDropdownRef}>
          <div
            onClick={() => setOpenDropdown(openDropdown === 'from' ? null : 'from')}
            className="flex items-center w-full cursor-pointer transition-colors"
            style={{
              paddingLeft: '24px',
              paddingRight: '24px',
              paddingTop: '8px',
              paddingBottom: '8px'
            }}
          >
            <div className="flex-shrink-0 mr-3">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M4 16L28 16" stroke="#6E7491" strokeWidth="2" strokeLinecap="round"/>
                <path d="M20 8L28 16L20 24" stroke="#6E7491" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-sans font-normal truncate" style={{ fontSize: '18px', fontWeight: '400', color: '#7C8DB0' }}>
                {searchData.from || 'From where?'}
              </div>
            </div>
          </div>
          
          {/* From Dropdown */}
          {openDropdown === 'from' && (
            <div className="absolute top-full left-0 mt-1 z-50 w-full bg-white border border-gray-200 rounded-lg shadow-xl">
              <div className="max-h-60 overflow-y-auto">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    onClick={() => handleLocationSelect(location, 'from')}
                    className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm text-gray-700 transition-colors"
                  >
                    {location}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div style={{ width: '1px', height: '48px', backgroundColor: '#CBD4E6' }} />

        {/* Where To Input */}
        <div className="relative flex-1" ref={toDropdownRef}>
          <div
            onClick={() => setOpenDropdown(openDropdown === 'to' ? null : 'to')}
            className="flex items-center w-full cursor-pointer transition-colors"
            style={{
              paddingLeft: '24px',
              paddingRight: '24px',
              paddingTop: '8px',
              paddingBottom: '8px'
            }}
          >
            <div className="flex-shrink-0 mr-3">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M28 16L4 16" stroke="#6E7491" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 8L4 16L12 24" stroke="#6E7491" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-sans font-normal truncate" style={{ fontSize: '18px', fontWeight: '400', color: '#7C8DB0' }}>
                {searchData.to || 'Where to?'}
              </div>
            </div>
          </div>
          
          {/* To Dropdown */}
          {openDropdown === 'to' && (
            <div className="absolute top-full left-0 mt-1 z-50 w-full bg-white border border-gray-200 rounded-lg shadow-xl">
              <div className="max-h-60 overflow-y-auto">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    onClick={() => handleLocationSelect(location, 'to')}
                    className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm text-gray-700 transition-colors"
                  >
                    {location}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div style={{ width: '1px', height: '48px', backgroundColor: '#CBD4E6' }} />

        {/* Date Picker Input */}
        <div className="relative flex-1" ref={calendarRef}>
          <div
            onClick={() => { setShowCalendar(!showCalendar); setOpenDropdown(null); }}
            className="flex items-center w-full cursor-pointer transition-colors"
            style={{
              paddingLeft: '24px',
              paddingRight: '24px',
              paddingTop: '8px',
              paddingBottom: '8px'
            }}
          >
            <div className="flex-shrink-0 mr-3">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M8 7V3M24 7V3M3 12H29M5 27H27C28.1046 27 29 26.1046 29 25V7C29 5.89543 28.1046 5 27 5H5C3.89543 5 3 5.89543 3 7V25C3 26.1046 3.89543 27 5 27Z" stroke="#6E7491" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 16H12M16 16H20" stroke="#6E7491" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-sans font-normal truncate" style={{ fontSize: '18px', fontWeight: '400', color: '#7C8DB0' }}>
                {getDateDisplay() || 'Depart - Return'}
              </div>
            </div>
          </div>
          
          {/* Calendar */}
          {showCalendar && (
            <div className="absolute top-full left-0 mt-1 z-50 w-full bg-white border border-gray-200 rounded-lg shadow-xl p-4">
              {/* Trip Type Toggle */}
              <div className="flex gap-4 mb-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="tripType"
                    checked={searchData.tripType === 'roundtrip'}
                    onChange={() => setSearchData(prev => ({ ...prev, tripType: 'roundtrip' }))}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">Round Trip</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="tripType"
                    checked={searchData.tripType === 'oneway'}
                    onChange={() => setSearchData(prev => ({ ...prev, tripType: 'oneway' }))}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">One Way</span>
                </label>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-2">Depart</div>
                  <input
                    type="date"
                    value={searchData.departDate}
                    onChange={(e) => setSearchData(prev => ({ ...prev, departDate: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {searchData.tripType === 'roundtrip' && (
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">Return</div>
                    <input
                      type="date"
                      value={searchData.returnDate}
                      onChange={(e) => setSearchData(prev => ({ ...prev, returnDate: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}
              </div>

              {/* Done Button */}
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setShowCalendar(false)}
                  className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div style={{ width: '1px', height: '48px', backgroundColor: '#CBD4E6' }} />

        {/* Travelers Input */}
        <div className="relative flex-1" ref={travelersDropdownRef}>
          <div
            onClick={() => setOpenDropdown(openDropdown === 'travelers' ? null : 'travelers')}
            className="flex items-center w-full cursor-pointer transition-colors"
            style={{
              paddingLeft: '24px',
              paddingRight: '24px',
              paddingTop: '8px',
              paddingBottom: '8px'
            }}
          >
            <div className="flex-shrink-0 mr-3">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 8C18.2091 8 20 6.20914 20 4C20 1.79086 18.2091 0 16 0C13.7909 0 12 1.79086 12 4C12 6.20914 13.7909 8 16 8Z" stroke="#6E7491" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 28C24 22.4772 19.5228 18 14 18C8.47715 18 4 22.4772 4 28" stroke="#6E7491" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M28 28C28 23.5817 24.4183 20 20 20" stroke="#6E7491" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-sans font-normal truncate" style={{ fontSize: '18px', fontWeight: '400', color: '#7C8DB0' }}>
                {getTravelersDisplay() || 'Travelers'}
              </div>
            </div>
          </div>
          
          {/* Travelers Dropdown */}
          {openDropdown === 'travelers' && (
            <div className="absolute top-full left-0 mt-1 z-50 w-full bg-white border border-gray-200 rounded-lg shadow-xl p-4">
              {/* Adults */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700">Adults</span>
                  <div className="text-xs text-gray-500">(18+)</div>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleTravelersChange('adults', -1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50"
                    disabled={searchData.adults <= 1}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="w-12 text-center font-medium text-gray-900">{searchData.adults}</span>
                  <button
                    onClick={() => handleTravelersChange('adults', 1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Minors */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700">Minors</span>
                  <div className="text-xs text-gray-500">(Under 18)</div>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleTravelersChange('minors', -1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50"
                    disabled={searchData.minors <= 0}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="w-12 text-center font-medium text-gray-900">{searchData.minors}</span>
                  <button
                    onClick={() => handleTravelersChange('minors', 1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search Button */}
        <button 
          className="flex items-center justify-center font-sans font-normal text-white transition-colors duration-200"
          style={{
            width: '96px',
            height: '48px',
            backgroundColor: '#605DEC',
            borderRadius: '4px'
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default ModernSearchBar;
