const instrumentsData = require('./data/instrument_family_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentInfoView = require('./views/instrument_info_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#instrument-families');

  const instrumentDropdown = new SelectView(selectElement);
  instrumentDropdown.bindEvents();

  const infoDiv = document.querySelector('div#instrument-family');
  const instrumentInfoView = new InstrumentInfoView(infoDiv);
  instrumentInfoView.bindEvents();


  const instrumentFamilyData = new InstrumentFamilies(instrumentsData);
  instrumentFamilyData.bindEvents();

});
