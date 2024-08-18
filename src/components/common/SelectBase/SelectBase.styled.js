import { theme } from '~/styles/theme';

const minTablet = '@media only screen and (min-width: 768px)';

export const selectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    width: 120,
    padding: `${theme.spacing(2.75)} ${theme.spacing(3.25)}`,
    borderRadius: theme.radii.field,
    border: '1px solid #3e3e3e',
    cursor: 'pointer',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    '&:hover': {
      borderColor: '#3e3e3e'
    },
    '& .css-tj5bde-Svg': {
      transform: state.menuIsOpen && 'rotate(180deg)'
    },
    [minTablet]: {
      width: 153,
      padding: `${theme.spacing(3.25)}`
    }
  }),
  valueContainer: baseStyles => ({
    ...baseStyles,
    padding: 0,
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 1.33333,
    color: theme.colors.primaryText,
    [minTablet]: {
      fontSize: 14,
      lineHeight: 1.28571
    }
  }),
  singleValue: baseStyles => ({
    ...baseStyles,
    marginLeft: 0,
    marginRight: 0,
    color: 'inherit'
  }),
  input: baseStyles => ({
    ...baseStyles,
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  dropdownIndicator: baseStyles => ({
    ...baseStyles,
    padding: 0,
    height: 16,
    width: 16,
    color: theme.colors.primaryText,
    '&:hover': {
      color: theme.colors.primaryText
    },
    '& .css-tj5bde-Svg': {
      width: '100%',
      height: '100%',
      transition: theme.transition('transform')
    }
  }),
  menu: baseStyles => ({
    ...baseStyles,
    marginTop: theme.spacing(1),
    marginBottom: 0,
    paddingTop: theme.spacing(1.625),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(1.625),
    zIndex: 10,
    backgroundColor: theme.colors.secondaryBg,
    borderRadius: theme.radii.field,
    boxShadow: 'none',
    border: 'none'
  }),
  menuList: baseStyles => ({
    ...baseStyles,
    height: '100%',
    '&::-webkit-scrollbar': {
      width: 6
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent'
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 10,
      background: '#3e3e3e'
    }
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    paddingTop: theme.spacing(0.875),
    paddingBottom: theme.spacing(0.875),
    paddingLeft: theme.spacing(3.5),
    paddingRight: theme.spacing(3.5),
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 1.3333,
    letterSpacing: '-0.02em',
    color: theme.colors[state.isSelected ? 'primaryText' : 'secondaryText'],
    cursor: 'pointer',
    backgroundColor: 'transparent',
    transition: theme.transition('color'),
    '&:hover': {
      color: theme.colors.primaryText
    },
    '&:active': {
      backgroundColor: 'transparent'
    },
    [minTablet]: {
      fontSize: 14,
      lineHeight: 1.28571
    }
  })
};
