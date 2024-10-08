import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getAllSkills, addExperience, updateSkillExp, getSkillsByFreelancer } from '../../../../services/SkillExperienceService';
import './SkillExperience.css'; // Import the CSS file

const SkillExperience = () => {
  const [skillsList, setSkillsList] = useState([]);
  const [skillsOfFreelancer, setSkillsOfFreelancer] = useState([]);
  const [skillForm, setSkillForm] = useState({ skillId: '', skillExperience: '' });
  const [skillUpdateForm, setSkillUpdateForm] = useState({ skillId: '', skillExperience: '' });
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showListModal, setShowListModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getAllSkills()
      .then(data => setSkillsList(data))
      .catch(err => alert(err.message));

    loadSkills();
  }, []);

  const loadSkills = () => {
    const freelancerId = Number(localStorage.getItem('freelancerId'));
    getSkillsByFreelancer(freelancerId)
      .then(data => setSkillsOfFreelancer(data))
      .catch(err => alert(err.message));
  };

  const handleAddSkill = () => {
    const freelancerId = Number(localStorage.getItem('freelancerId'));
    const skillExperience = { ...skillForm, freelancerId };
    addExperience(skillExperience)
      .then(data => {
        alert(data);
        setShowAddModal(false);
      })
      .catch(err => alert(err.message));
  };

  const handleUpdateSkill = () => {
    const freelancerId = Number(localStorage.getItem('freelancerId'));
    updateSkillExp(skillUpdateForm.skillId, freelancerId, skillUpdateForm.skillExperience)
      .then(data => {
        alert(data);
        setShowUpdateModal(false);
        loadSkills();
      })
      .catch(err => {
        alert(err.message);
        setShowUpdateModal(false);
        loadSkills();
      });
  };

  const goBack = () => {
    navigate("../");
  };

  return (
    <div className="skill-experience-container">
      {/* Go Back Button */}
      <Button className="go-back-btn" onClick={goBack}>
        Go Back
      </Button>

      <div className="row text-center">
        <div className="col-12">
          <div className="card card-main">
            <h4 className="card-title">Manage Your Skills</h4>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="card skill-card">
                    <h5 className="card-title">Add a New Experience</h5>
                    <div className="card-body">
                      <Button variant="primary" onClick={() => setShowAddModal(true)}>
                        Add Experience
                      </Button>

                      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
                        <Modal.Header closeButton>
                          <Modal.Title>Add New Experience</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form>
                            <Form.Group className="form-group">
                              <Form.Label className="form-label">Skill</Form.Label>
                              <Form.Select
                                className="form-select"
                                value={skillForm.skillId}
                                onChange={(e) => setSkillForm({ ...skillForm, skillId: e.target.value })}
                              >
                                <option value="">Select Skill</option>
                                {skillsList.map(skill => (
                                  <option key={skill.id} value={skill.id}>{skill.name}</option>
                                ))}
                              </Form.Select>
                            </Form.Group>
                            <Form.Group className="form-group">
                              <Form.Label className="form-label">Skill Experience</Form.Label>
                              <Form.Control
                                className="form-control"
                                type="number"
                                placeholder="Experience in Years"
                                value={skillForm.skillExperience}
                                onChange={(e) => setSkillForm({ ...skillForm, skillExperience: e.target.value })}
                              />
                            </Form.Group>
                          </Form>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
                            Close
                          </Button>
                          <Button variant="primary" onClick={handleAddSkill}>
                            Save Skill
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card skill-card">
                    <h5 className="card-title">Update an Existing Skill</h5>
                    <div className="card-body">
                      <Button variant="warning" onClick={() => { setShowUpdateModal(true); loadSkills(); }}>
                        Update Experience
                      </Button>

                      <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)}>
                        <Modal.Header closeButton>
                          <Modal.Title>Update Experience</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form>
                            <Form.Group className="form-group">
                              <Form.Label className="form-label">Skill</Form.Label>
                              <Form.Select
                                className="form-select"
                                value={skillUpdateForm.skillId}
                                onChange={(e) => setSkillUpdateForm({ ...skillUpdateForm, skillId: e.target.value })}
                              >
                                <option value="">Select Skill</option>
                                {skillsOfFreelancer.map(skill => (
                                  <option key={skill.skillId} value={skill.skillId}>{skill.skillName}</option>
                                ))}
                              </Form.Select>
                            </Form.Group>
                            <Form.Group className="form-group">
                              <Form.Label className="form-label">Skill Experience</Form.Label>
                              <Form.Control
                                className="form-control"
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
                  </div>
                </div>
              </div>
              <div className="row text-center mt-4">
                <div className="col-12">
                  <div className="card skill-card">
                    <h5 className="card-title">List Existing Experiences</h5>
                    <div className="card-body">
                      <Button variant="dark" onClick={() => setShowListModal(true)}>
                        View Experiences
                      </Button>

                      <Modal show={showListModal} onHide={() => setShowListModal(false)} backdrop="static" keyboard={false}>
                        <Modal.Header closeButton>
                          <Modal.Title>Experiences List</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Table striped bordered hover>
                            <thead>
                              <tr>
                                <th>Skill Name</th>
                                <th>Experience (Years)</th>
                              </tr>
                            </thead>
                            <tbody>
                              {skillsOfFreelancer.map(skill => (
                                <tr key={skill.skillId}>
                                  <td>{skill.skillName}</td>
                                  <td>{skill.experience}</td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={() => setShowListModal(false)}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Back to Top
      </Button>
    </div>
  );
};

export default SkillExperience;
