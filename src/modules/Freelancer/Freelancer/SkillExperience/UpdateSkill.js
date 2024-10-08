import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { getAllSkills, updateSkillExp } from '../../../../services/skillService';
import './UpdateSkill.css'; // Import the CSS file

const UpdateSkill = () => {
  const [skillsList, setSkillsList] = useState([]);
  const [skillUpdateForm, setSkillUpdateForm] = useState({ skillId: '', skillExperience: '' });
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  useEffect(() => {
    // Fetch all skills on component mount
    getAllSkills()
      .then(data => setSkillsList(data))
      .catch(err => alert(err.message));
  }, []);

  const handleUpdateSkill = () => {
    const freelancerId = Number(localStorage.getItem('freelancerId'));
    updateSkillExp(skillUpdateForm.skillId, freelancerId, skillUpdateForm.skillExperience)
      .then(data => {
        alert(data);
        setShowUpdateModal(false);
      })
      .catch(err => {
        alert(err.message);
        setShowUpdateModal(false);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Update Skill</h2>
      <Button variant="warning" onClick={() => setShowUpdateModal(true)}>
        Update Skill
      </Button>

      <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Skill Experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Skill</Form.Label>
              <Form.Select
                value={skillUpdateForm.skillId}
                onChange={(e) => setSkillUpdateForm({ ...skillUpdateForm, skillId: e.target.value })}
              >
                <option value="">Select Skill</option>
                {skillsList.map(skill => (
                  <option key={skill.id} value={skill.id}>{skill.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Skill Experience</Form.Label>
              <Form.Control
                type="number"
                placeholder="Experience in Years"
                value={skillUpdateForm.skillExperience}
                onChange={(e) => setSkillUpdateForm({ ...skillUpdateForm, skillExperience: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowUpdateModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateSkill}>
            Update Experience
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateSkill;
