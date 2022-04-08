import React, { useState, useEffect } from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";

function MarkingAPI() {
  const [markingInfo, setMarkingInfo] = useState([{}]);
  const [formData, setFormData] = useState({
    name: "",
    power: "",
    wavelength: "",
    area: "",
    depth: "",
    speed: "",
    width: "",
    text_width: "",
    precision: "",
    power_consumption: "",
    lifetime: "",
    cooling: "",
    gallery_link: "",
    logo_link: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    fetch("/marking")
      .then((response) => response.json())
      .then((data) => {
        setMarkingInfo(data);
      });
  }, []);

  function handleSubmit() {
    fetch("/marking", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  }
  //   console.log(JSON.stringify(formData));

  return (
    <div className='d-flex justify-content-between'>
      <div>
        <h5>Add a device:</h5>
        <Form>
          <FormGroup>
            <FormControl
              as='input'
              type='text'
              name='name'
              placeholder='Product name'
              onChange={handleChange}
              required
              value={formData.name}></FormControl>
            <FormControl
              as='input'
              type='text'
              name='power'
              placeholder='Laser power'
              onChange={handleChange}
              required
              value={formData.power}></FormControl>
            <FormControl
              as='input'
              type='text'
              name='wavelength'
              placeholder='Laser wavelength'
              onChange={handleChange}
              required
              value={formData.wavelength}></FormControl>
            <FormControl
              as='input'
              type='text'
              name='area'
              placeholder='Marking area'
              onChange={handleChange}
              required
              value={formData.area}></FormControl>
            <FormControl
              as='input'
              type='text'
              name='depth'
              placeholder='Marking depth'
              onChange={handleChange}
              required
              value={formData.depth}></FormControl>
            <FormControl
              as='input'
              type='text'
              name='speed'
              placeholder='Marking speed'
              onChange={handleChange}
              required
              value={formData.speed}></FormControl>
            <FormControl
              as='input'
              type='text'
              name='width'
              placeholder='Marking width'
              onChange={handleChange}
              required
              value={formData.width}></FormControl>
            <FormControl
              as='input'
              type='text'
              name='text_width'
              placeholder='Text width'
              onChange={handleChange}
              required
              value={formData.text_width}></FormControl>
            <FormControl
              as='input'
              type='text'
              name='precision'
              placeholder='Marking precision'
              onChange={handleChange}
              required
              value={formData.precision}></FormControl>
            <FormControl
              as='input'
              type='text'
              name='power_consumption'
              placeholder='Power consumption'
              onChange={handleChange}
              required
              value={formData.power_consumption}></FormControl>
            <FormControl
              as='input'
              type='text'
              name='lifetime'
              placeholder='Laser source lifetime'
              onChange={handleChange}
              required
              value={formData.lifetime}></FormControl>
            <FormControl
              as='input'
              type='text'
              name='cooling'
              placeholder='Cooling method'
              onChange={handleChange}
              required
              value={formData.cooling}></FormControl>
            <FormControl
              as='input'
              type='text'
              name='gallery_link'
              placeholder='Gallery link'
              onChange={handleChange}
              required
              value={formData.gallery_link}></FormControl>
            <FormControl
              as='input'
              type='text'
              name='logo_link'
              placeholder='Logo link'
              onChange={handleChange}
              required
              value={formData.logo_link}></FormControl>
          </FormGroup>
          <Button
            className='my-2'
            variant='primary'
            type='submit'
            onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
      <div>
        {typeof markingInfo[0] === "undefined" ? (
          <p>Loading...</p>
        ) : (
          markingInfo.map((item, i) => (
            <div key={i} style={{ lineHeight: "10px" }}>
              <h4>
                {markingInfo[i].id}. {markingInfo[i].name}
              </h4>
              <p>Laser power: {markingInfo[i].power}</p>
              <p>Laser wavelength: {markingInfo[i].wavelength}</p>
              <p>Marking area: {markingInfo[i].area}</p>
              <p>Marking depth: {markingInfo[i].depth}</p>
              <p>Marking speed: {markingInfo[i].speed}</p>
              <p>Marking width: {markingInfo[i].width}</p>
              <p>Text width: {markingInfo[i].text_width}</p>
              <p>Precision: {markingInfo[i].precision}</p>
              <p>Power consumption: {markingInfo[i].power_consumption}</p>
              <p>Source lifetime: {markingInfo[i].lifetime}</p>
              <p>Cooling method: {markingInfo[i].cooling}</p>
              <p>Gallery: {markingInfo[i].gallery_link}</p>
              <p>Logo: {markingInfo[i].logo_link}</p>
              <div className='d-flex'>
                <Button variant='success mx-2'>Edit</Button>
                <Button variant='danger mx-2'>Delete</Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MarkingAPI;
