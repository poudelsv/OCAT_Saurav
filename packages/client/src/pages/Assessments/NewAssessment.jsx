import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import { AssessmentService } from '../../services/AssessmentService';

export const NewAssessment = () => {

  // create a form that utilizes the "onSubmit" function to send data to
  // packages/client/src/services/AssessmentService.js and then onto the packages/api/src/routes/assessment express API

  const { handleSubmit, register } = useForm();

  const onSubmit = async (assessment) => {

    const score = Number(assessment.previousContact) +
    Number(assessment.catAltercations) +
    Number(assessment.ownerAltercations) +
    Number(assessment.hissesAtStrangers);

    let riskLevel = ``;
    const risk = (scores) => {
      if (scores >= 0 && scores <= 1) { // calculates risk level
        riskLevel = `Low Risk`;
      } else if (scores >= 2 && scores <= 3) {
        riskLevel = `Medium Risk`;
      } else if (scores >= 4 && scores <= 5) {
        riskLevel = `High Risk`;
      }
      return riskLevel;
    };

    const formData = {
      catDob: assessment.catDob,
      catName: assessment.catName,
      risk: risk(score),
      score,
    };
    await AssessmentService.submit(formData); // sending data to assessmentServices
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* Instrument Section */}
      <h2>CAT BEHAVIORAL INSTRUMENT</h2>

      <Form.Group className="mb-3" controlId="catName">
        <Form.Label>Cat Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Cat Name"
          {...register(`catName`, { required: true })}
        />

      </Form.Group>
      <Form.Group className="mb-3" controlId="catDob">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="date"
          placeholder="Cat DOB"
          {...register(`catDob`, { required: true })}
        />

      </Form.Group>

      {/* Questions & Responses Section */}
      <h2>Questions & Responses</h2>

      <Form.Group className="mb-3" controlId="previousContact">
        <Form.Label>Previous Contact with the Cat Judicial System</Form.Label>
        <Form.Check
          type="radio"
          id="previousContactYes"
          label="Yes"
          value="1"
          {...register(`previousContact`, { required: true })}
        />
        <Form.Check
          type="radio"
          id="previousContactNo"
          label="No"
          value="0"
          {...register(`previousContact`, { required: true })}
        />

      </Form.Group>

      <Form.Group className="mb-3" controlId="catAltercations">
        <Form.Label>Physical Altercations with Other Cats</Form.Label>
        <Form.Check
          type="radio"
          id="catAltercationsLessThanThree"
          label="0-3 altercations"
          value="0"
          {...register(`catAltercations`, { required: true })}
        />
        <Form.Check
          type="radio"
          id="catAltercationsMoreThanThree"
          label="3+ altercations"
          value="1"
          {...register(`catAltercations`, { required: true })}
        />

      </Form.Group>

      <Form.Group className="mb-3" controlId="ownerAltercations">
        <Form.Label>Physical Altercations with Owner (scratching, biting, etc...)</Form.Label>
        <Form.Check
          type="radio"
          id="ownerAltercationsLessThanTen"
          label="0-10 altercations"
          value="0"
          {...register(`ownerAltercations`, { required: true })}
        />
        <Form.Check
          type="radio"
          id="ownerAltercationsMoreThanTen"
          label="10+ altercations"
          value="1"
          {...register(`ownerAltercations`, { required: true })}
        />

      </Form.Group>

      <Form.Group className="mb-3" controlId="playsWithDogs">
        <Form.Label>Plays Well with Dogs</Form.Label>
        <Form.Check
          type="radio"
          id="playsWellWithDogsNo"
          label="No"
          value="1"
          {...register(`playsWithDogs`, { required: true })}
        />
        <Form.Check
          type="radio"
          id="playsWellWithDogsYes"
          label="Yes"
          value="0"
          {...register(`playsWithDogs`, { required: true })}
        />

      </Form.Group>

      <Form.Group className="mb-3" controlId="hissesAtStrangers">
        <Form.Label>Hisses at Strangers</Form.Label>
        <Form.Check
          type="radio"
          id="hissesAtStrangersNo"
          label="No"
          value="0"
          {...register(`hissesAtStrangers`, { required: true })}
        />
        <Form.Check
          type="radio"
          id="hissesAtStrangersYes"
          label="Yes"
          value="1"
          {...register(`hissesAtStrangers`, { required: true })}
        />

      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
