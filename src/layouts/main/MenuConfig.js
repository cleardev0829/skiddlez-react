// routes
import { PATH_AUTH, PATH_PAGE } from '../../routes/paths';
// components
import { PATH_AFTER_LOGIN } from '../../config';
// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: 'Home',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/',
  },
  {
    title: 'Product',
    path: '/product',
    icon: <Iconify icon={'eva:file-fill'} {...ICON_SIZE} />,
  },
  {
    title: 'Solution',
    icon: <Iconify icon={'eva:book-open-fill'} {...ICON_SIZE} />,
    path: "/solution",
  },
  {
    title: 'Features',
    icon: <Iconify icon={'eva:book-open-fill'} {...ICON_SIZE} />,
    path: "features",
  },
  {
    title: 'Contact Sales',
    icon: <Iconify icon={'eva:book-open-fill'} {...ICON_SIZE} />,
    path: "contactsales",
  },

];

export default menuConfig;
