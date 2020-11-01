const boolToYesNoMap = new Map();

boolToYesNoMap.set(true, 'yes');
boolToYesNoMap.set(false, 'no');

export default function boolToYesNo(bool) {
  return boolToYesNoMap.get(bool);
}
