import PropTypes from 'prop-types';

import { Wrapper, Item, OnlineLabel, Avatar, Title } from './Friends.styled';
const Friends = ({ data }) => {
  const renderList = () =>
    data.map(({ id, isOnline, name, avatar }) => (
      <Item key={id}>
        <OnlineLabel isOnline={isOnline} />
        <Avatar src={avatar} alt={name} />
        <Title>{name}</Title>
      </Item>
    ));

  return <Wrapper>{data && renderList()}</Wrapper>;
};

Friends.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default Friends;
