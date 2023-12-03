

export let Profiles: { info: any; online: boolean }[] = [];
export let activeUsers:{ info: any; online: boolean }[] = []

export function deleteProfile(id:any) {
    const Test = Profiles.filter(item => item.info.id !== id)
    Profiles = Test
    localStorage.removeItem('Remember')
}
const isLocalStorageAvailable = typeof localStorage !== 'undefined';
if (isLocalStorageAvailable) {
  const SavedProfile = JSON.parse(localStorage.getItem('Profiles') || '[]')
  Profiles = SavedProfile
  const Remember = JSON.parse(localStorage.getItem('Remember') || '[]')
  activeUsers = Remember
}
export function changeState(info: any, state: boolean) {
  const existingProfile = Profiles.findIndex(
      (item) => item.info.id === info
  );
  if (existingProfile !== -1) {
      Profiles[existingProfile].online = state;
      if (Profiles[existingProfile].online) {
        Profiles[existingProfile].online = !Profiles[existingProfile].online;
      }
    
  } 
  
}

export function getActiveUserInfo(id: any) {
  return activeUsers.find((user:any) => user.info.id === id);
}
export function saveToLocal() {
  localStorage.setItem('Profiles', JSON.stringify(Profiles));
}
export function rememberMe() {

  localStorage.setItem('Remember', JSON.stringify(activeUsers));
}
export function addtoprofiles(info:any) {
    
    Profiles.push({info:info , online:false})
    saveToLocal()
}

export function removeRemember() {
  localStorage.removeItem('Remember')
}