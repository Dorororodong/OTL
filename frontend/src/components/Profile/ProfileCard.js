import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';

const BoxStyle = styled('Box')({
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    position: 'absolute'
  });

  
const CardStyle = styled(Card)({
  "&:hover":{
    boxShadow: '2px 5px 5px 2px rgba(225, 223, 214, 1)'
  }
});


ProfileCard.propTypes = {
  product: PropTypes.object
};

/**
 * CSW | 2022.03.17 | FIX
 * @name ProfileCard
 * @des ProfileCard 컴포넌트
 */
export default function ProfileCard({ product }) {
  const { image, nickname } = product;

  return (
    <CardStyle>
      <Link
          to={`/#`}
          color="inherit"
          underline='hover'
          component={RouterLink}
        >
        <BoxStyle sx={{ pt: '100%', position: 'relative'}}>
          <Avatar alt={nickname} src={image} sx={{ width: 150, height: 150, margin: 'auto', mt: 5 }}/>
        </BoxStyle>
        <Stack spacing={2} sx={{ p: 3 }}>
            <Typography variant="subtitle1" textAlign="center" noWrap>
              {nickname}
            </Typography>
        </Stack>

      </Link>
    </CardStyle>
  );
}
