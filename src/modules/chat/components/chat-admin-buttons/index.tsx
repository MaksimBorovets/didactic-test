import { useContext } from 'react';
import { useHandleRecommendationMutation } from '../../../../store/apis/sessionAPI';
import CustomButton from '../../../common/components/custom-btn';
import useLocationParams from '../../../common/hooks/useLocationParams';
import { IInput } from '../../../common/types';
import { AdminButtonsBox } from '../../styles';
import { StorageContext } from '../../../common/context/storage';

interface IAdminButtonsProps {
  message: IInput;
  isDraft?: boolean;
}

export default function AdminButtons({ message, isDraft }: IAdminButtonsProps) {
  const { activeSessionSecret } = useContext(StorageContext);
  const { adminPassword } = useLocationParams();
  const [handleRecomendationMutation] = useHandleRecommendationMutation();

  const handleDraftClick = (toggle: boolean, fromDraft: boolean) => {
    handleRecomendationMutation({
      adminPassword: adminPassword!,
      fromDraft,
      id: message.id!,
      session_secret: activeSessionSecret!,
      toggle,
    });
  };

  return (
    <>
      <AdminButtonsBox>
        {isDraft ? (
          <>
            <CustomButton
              btnText="approve"
              onClick={() => handleDraftClick(true, true)}
            />
            <CustomButton
              btnText="delete"
              onClick={() => handleDraftClick(false, true)}
            />
          </>
        ) : (
          <>
            <CustomButton
              btnText="disaprove"
              onClick={() => handleDraftClick(true, false)}
            />
            <CustomButton
              btnText="delete"
              onClick={() => handleDraftClick(false, false)}
            />
            <CustomButton btnText="email" onClick={() => {}} />
          </>
        )}
      </AdminButtonsBox>
    </>
  );
}
