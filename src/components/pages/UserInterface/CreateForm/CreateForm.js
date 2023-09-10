import ProjectForm from './Forms/ProjectForm/ProjectForm';
import TapuForm from './Forms/TapuForm/TapuForm';
import ValueForm from './Forms/ValueForm/ValueForm';
import ZeminForm from './Forms/ZeminForm/ZeminForm';
import { useEffect, useState } from 'react';
import { VStack } from '@chakra-ui/react';
import instance from '../../../../services/axios-firebase';
import { getCurrentUser } from '../../../../services/auth';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../../services/HOC/UserProvider';

function CreateForm() {
  const userData = useUser();
  const navigate = useNavigate();
  const [userID, setUserID] = useState(null);
  const [formData, setFormData] = useState({
    projectData: {},
    tapuData: {},
    zeminData: {},
    valueData: {},
  });
  const [currentStep, setCurrentStep] = useState(1);
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = await getCurrentUser();
      if (user) {
        setUserID(user.uid);
      }
    };

    fetchCurrentUser();
  }, []);

  const handleProjectFormNext = (projectData) => {
    setFormData({ ...formData, projectData });
    setCurrentStep(currentStep + 1);
  };

  const handleTapuFormNext = (tapuData) => {
    setFormData({ ...formData, tapuData });
    setCurrentStep(currentStep + 1);
  };

  const handleZeminFormNext = (zeminData) => {
    setFormData({ ...formData, zeminData });
    setCurrentStep(currentStep + 1);
  };

  const handleValueFormNext = (valueData) => {
    const completeFormData = { ...formData, valueData };
    handleSubmit(completeFormData);
    navigate('/my-reports', { state: { formData: completeFormData } });
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (finalFormData) => {
    if (!userID) {
      console.error('No user ID available');
      return;
    }

    try {
      const response = await instance.post(`users/${userID}/reports.json`, finalFormData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <VStack>
      {currentStep === 1 && <ProjectForm profileData={userData.profile} onNext={handleProjectFormNext} />}
      {currentStep === 2 && <TapuForm onBack={handleBack} onNext={handleTapuFormNext} />}
      {currentStep === 3 && <ZeminForm onBack={handleBack} onNext={handleZeminFormNext} />}
      {currentStep === 4 && <ValueForm onBack={handleBack} onNext={handleValueFormNext} />}
    </VStack>
  );
}

export default CreateForm;
