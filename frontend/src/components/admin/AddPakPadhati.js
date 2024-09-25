import React, { useState } from 'react';

const AddPakPadhati = () => {
  const [plantData, setPlantData] = useState({
    _id: "65841047b0201856c136cdd9",
    plantName: "કાલમેઘ (કરિયાતુ)",
    thumbnail: "https://res.cloudinary.com/dcxdcs6l4/image/upload/v1703152385/MAAPP/j0gf5fmbdldhgntewuml.jpg",
    image: "imgKRT",
    details: [
      {
        title: "નામ અને પર્યાય",
        names: {
          guj: "કાલમેઘ (કરિયાતુ)",
          hind: "हरचिरैता",
          sanskrit: "भुनि",
          eng: "Creat",
          lat: "Andrzgraphis panicular (Burm. I.) Nees",
          kul: "Acanthaceae"
        },
        desc: "કાળમેઘ સ્વાદમાં અતિશય કડવું હોય છે."
      },
      // Add other details as necessary
    ]
  });

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [c1, setC1] = useState('');
  const [miniData, setMiniData] = useState({
    title:selectedCategory,
    desc:c1
  });

  const handleAddCategory = () => {
    console.log(miniData);
    // plantData.details.push(miniData);
    // console.log(plantData);
    setSelectedCategory('');
    setC1('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlantData({ ...plantData, [name]: value });
  };

  const handleDetailChange = (e, index) => {
    const { name, value } = e.target;
    const newDetails = [...plantData.details];
    if (name.startsWith("detailDesc")) {
      newDetails[index].desc = value;
    } else if (name.startsWith("name")) {
      const lang = name.split('_')[1];
      newDetails[index].names[lang] = value;
    }
    setPlantData({ ...plantData, details: newDetails });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(plantData);
    // Handle form submission logic here (e.g., API call)
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Plant Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="plantName">Plant Name</label>
          <input
            type="text"
            name="plantName"
            id="plantName"
            value={plantData.plantName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="thumbnail">Thumbnail URL</label>
          <input
            type="text"
            name="thumbnail"
            id="thumbnail"
            value={plantData.thumbnail}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <h3 className="text-lg font-semibold mb-2">Names:</h3>
        {plantData.details.map((detail, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-md font-bold">{detail.title}</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">Gujarati</label>
                <input
                  type="text"
                  name={`name_guj`}
                  value={detail.names.guj}
                  onChange={(e) => handleDetailChange(e, index)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Hindi</label>
                <input
                  type="text"
                  name={`name_hind`}
                  value={detail.names.hind}
                  onChange={(e) => handleDetailChange(e, index)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Sanskrit</label>
                <input
                  type="text"
                  name={`name_sanskrit`}
                  value={detail.names.sanskrit}
                  onChange={(e) => handleDetailChange(e, index)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">English</label>
                <input
                  type="text"
                  name={`name_eng`}
                  value={detail.names.eng}
                  onChange={(e) => handleDetailChange(e, index)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Latin</label>
                <input
                  type="text"
                  name={`name_lat`}
                  value={detail.names.lat}
                  onChange={(e) => handleDetailChange(e, index)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Family</label>
                <input
                  type="text"
                  name={`name_kul`}
                  value={detail.names.kul}
                  onChange={(e) => handleDetailChange(e, index)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-4">Description:</h3>
            <textarea
              name={`detailDesc${index}`}
              value={detail.desc}
              onChange={(e) => handleDetailChange(e, index)}
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
              required
            />
          </div>
        ))}

<h3 className="text-lg font-semibold mb-2">Category Section:</h3>

<div className="mb-4">
  <label className="block text-gray-700 mb-1">Select Category</label>
  <select
    className="w-full p-2 border border-gray-300 rounded mb-2"
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
  >
    <option value="">Select a Title</option>
    <option value="Category 1">Category 1</option>
    <option value="Category 2">Category 2</option>
    <option value="Category 3">Category 3</option>
  </select>

  <label className="block text-gray-700 mb-1" htmlFor="c1">{selectedCategory} Description</label>
  <input
    type="text"
    id="c1"
    value={c1}
    onChange={(e) => setC1(e.target.value)}
    className="w-full p-2 border border-gray-300 rounded mb-2"
  />

  <button
    type="button"
    onClick={handleAddCategory}
    className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-200"
  >
    Add Category
  </button>
</div>

{categories.length > 0 && (
  <div className="mb-4">
    <h4 className="text-lg font-semibold mb-2">Added Categories:</h4>
    <ul className="list-disc ml-5">
      {categories.map((cat, index) => (
        <li key={index} className="text-gray-700">
          {cat.category} - C1: {cat.c1}, C2: {cat.c2}
        </li>
      ))}
    </ul>
  </div>
)}


        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPakPadhati;
