import React, { useState, useEffect, useRef } from 'react';
import SearchField from './SearchField';
import Divider from './Divider';
import SearchButton from './SearchButton';

interface SearchState {
  from: string;
  to: string;
  date: string;
  adults: number;
  minors: number;
}

const SearchBar: React.FC = () => {
  const [searchData, setSearchData] = useState<SearchState>({
    from: '',
    to: '',
    date: '',
    adults: 1,
    minors: 0
  });

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openDatePicker, setOpenDatePicker] = useState(false);

  const fromDropdownRef = useRef<HTMLDivElement>(null);
  const toDropdownRef = useRef<HTMLDivElement>(null);
  const passengersDropdownRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);

  // Sample location options
  const locations = [
    'New York (JFK)',
    'Los Angeles (LAX)',
    'Chicago (ORD)',
    'Miami (MIA)',
    'London (LHR)',
    'Paris (CDG)',
    'Tokyo (NRT)',
    'Dubai (DXB)'
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
      if (passengersDropdownRef.current && !passengersDropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
      if (dateRef.current && !dateRef.current.contains(event.target as Node)) {
        setOpenDatePicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleFieldClick = (field: keyof SearchState) => {
    if (field === 'from' || field === 'to') {
      setOpenDropdown(openDropdown === field ? null : field);
      setOpenDatePicker(false);
    } else if (field === 'date') {
      setOpenDatePicker(!openDatePicker);
      setOpenDropdown(null);
    } else if (field === 'adults' || field === 'minors') {
      setOpenDropdown('passengers');
      setOpenDatePicker(false);
    }
  };

  const handleLocationSelect = (location: string, field: 'from' | 'to') => {
    setSearchData(prev => ({ ...prev, [field]: location }));
    setOpenDropdown(null);
  };

  const handleDateSelect = (date: string) => {
    setSearchData(prev => ({ ...prev, date }));
    setOpenDatePicker(false);
  };

  const handlePassengerChange = (type: 'adults' | 'minors', delta: number) => {
    setSearchData(prev => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta)
    }));
  };

  const handleSearch = () => {
    console.log('Searching with data:', searchData);
  };

  const getPassengerDisplay = () => {
    const total = searchData.adults + searchData.minors;
    const adultText = searchData.adults === 1 ? '1 adult' : `${searchData.adults} adults`;
    const minorText = searchData.minors > 0 ? `, ${searchData.minors} minor${searchData.minors === 1 ? '' : 's'}` : '';
    return total === 1 ? adultText : `${total} passengers${minorText}`;
  };

  // Icons
  const planeTakeoffIcon = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  );

  const planeLandingIcon = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  );

  const calendarIcon = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );

  const usersIcon = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 max-w-6xl mx-auto relative">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center gap-0">
        <div className="relative" ref={fromDropdownRef}>
          <SearchField
            icon={planeTakeoffIcon}
            label="From where?"
            value={searchData.from}
            onClick={() => handleFieldClick('from')}
          />
          {/* From Dropdown */}
          {openDropdown === 'from' && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[200px]">
              {locations.map((location, index) => (
                <div
                  key={index}
                  onClick={() => handleLocationSelect(location, 'from')}
                  className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700"
                >
                  {location}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <Divider direction="vertical" />
        
        <div className="relative" ref={toDropdownRef}>
          <SearchField
            icon={planeLandingIcon}
            label="Where to?"
            value={searchData.to}
            onClick={() => handleFieldClick('to')}
          />
          {/* To Dropdown */}
          {openDropdown === 'to' && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[200px]">
              {locations.map((location, index) => (
                <div
                  key={index}
                  onClick={() => handleLocationSelect(location, 'to')}
                  className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700"
                >
                  {location}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <Divider direction="vertical" />
        
        <div className="relative" ref={dateRef}>
          <SearchField
            icon={calendarIcon}
            label="Depart – Return"
            value={searchData.date}
            onClick={() => handleFieldClick('date')}
            placeholder="Select dates"
          />
          {/* Date Picker */}
          {openDatePicker && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
              <input
                type="date"
                onChange={(e) => handleDateSelect(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
        </div>
        
        <Divider direction="vertical" />
        
        <div className="relative" ref={passengersDropdownRef}>
          <SearchField
            icon={usersIcon}
            label="Passengers"
            value={getPassengerDisplay()}
            onClick={() => handleFieldClick('adults')}
          />
          {/* Passengers Dropdown */}
          {openDropdown === 'passengers' && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 min-w-[200px]">
              {/* Adults */}
              <div className="mb-4">
                <div className="text-sm font-medium text-gray-700 mb-2">Adults</div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handlePassengerChange('adults', -1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="text-gray-700 font-medium w-8 text-center">{searchData.adults}</span>
                  <button
                    onClick={() => handlePassengerChange('adults', 1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Minors */}
              <div>
                <div className="text-sm font-medium text-gray-700 mb-2">Minors</div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handlePassengerChange('minors', -1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="text-gray-700 font-medium w-8 text-center">{searchData.minors}</span>
                  <button
                    onClick={() => handlePassengerChange('minors', 1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
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
        
        <div className="ml-4">
          <SearchButton onClick={handleSearch} />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden space-y-3">
        <div className="relative" ref={fromDropdownRef}>
          <SearchField
            icon={planeTakeoffIcon}
            label="From where?"
            value={searchData.from}
            onClick={() => handleFieldClick('from')}
            placeholder="City or airport"
          />
          {/* From Dropdown */}
          {openDropdown === 'from' && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[200px]">
              {locations.map((location, index) => (
                <div
                  key={index}
                  onClick={() => handleLocationSelect(location, 'from')}
                  className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700"
                >
                  {location}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <Divider direction="horizontal" />
        
        <div className="relative" ref={toDropdownRef}>
          <SearchField
            icon={planeLandingIcon}
            label="Where to?"
            value={searchData.to}
            onClick={() => handleFieldClick('to')}
            placeholder="City or airport"
          />
          {/* To Dropdown */}
          {openDropdown === 'to' && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[200px]">
              {locations.map((location, index) => (
                <div
                  key={index}
                  onClick={() => handleLocationSelect(location, 'to')}
                  className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700"
                >
                  {location}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <Divider direction="horizontal" />
        
        <div className="relative" ref={dateRef}>
          <SearchField
            icon={calendarIcon}
            label="Depart – Return"
            value={searchData.date}
            onClick={() => handleFieldClick('date')}
            placeholder="Select dates"
          />
          {/* Date Picker */}
          {openDatePicker && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
              <input
                type="date"
                onChange={(e) => handleDateSelect(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
        </div>
        
        <Divider direction="horizontal" />
        
        <div className="relative" ref={passengersDropdownRef}>
          <SearchField
            icon={usersIcon}
            label="Passengers"
            value={getPassengerDisplay()}
            onClick={() => handleFieldClick('adults')}
          />
          {/* Passengers Dropdown */}
          {openDropdown === 'passengers' && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 min-w-[200px]">
              {/* Adults */}
              <div className="mb-4">
                <div className="text-sm font-medium text-gray-700 mb-2">Adults</div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handlePassengerChange('adults', -1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="text-gray-700 font-medium w-8 text-center">{searchData.adults}</span>
                  <button
                    onClick={() => handlePassengerChange('adults', 1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Minors */}
              <div>
                <div className="text-sm font-medium text-gray-700 mb-2">Minors</div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handlePassengerChange('minors', -1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="text-gray-700 font-medium w-8 text-center">{searchData.minors}</span>
                  <button
                    onClick={() => handlePassengerChange('minors', 1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
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
        
        <Divider direction="horizontal" />
        <SearchButton onClick={handleSearch} className="w-full" />
      </div>
    </div>
  );
};

export default SearchBar;
