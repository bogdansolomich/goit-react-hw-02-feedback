import { StatsList } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const statsData = [
    { stat: good, title: 'Good' },
    { stat: neutral, title: 'Neutral' },
    { stat: bad, title: 'Bad' },
    { stat: total, title: 'Total' },
    { stat: positivePercentage, title: 'Positive feedback' },
  ];
  return (
    <StatsList>
      {statsData.map(item => {
        return (
          <li key={item.title}>
            <p>
              {item.title}: {item.stat}
            </p>
          </li>
        );
      })}
    </StatsList>
  );
};
