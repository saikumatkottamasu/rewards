import React, {useState, createContext} from 'react';

export const RewardContext = createContext();

export const RewardProvider = props => {
  const [rewardsData, setRewardsData] = useState({
    feedData: [],
    myRewardsData: [],
  });

  return (
    <RewardContext.Provider value={[rewardsData, setRewardsData]}>
      {props.children}
    </RewardContext.Provider>
  );
};
