
import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  const handleSingUpSubmit = (data) => {
    console.log('Sing Up', data);

  }

  const handleUpdateProfile = (data) => {
    console.log('Update Profile', data);
  }

  return (
    <>

      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={'Sing Up'}
        handleSingUpSubmit={handleSingUpSubmit}>
          <div>
            <h2>Sing Up</h2>
            <p>Please sing up now</p>
          </div>
        </ReusableForm>
      <ReusableForm formTitle={'Profile Update'}
        handleUpdateProfile={handleUpdateProfile}
        submitBtnText='Update'>
          <div>
            <h2>Update Profile</h2>
            <p>Always Keep your profile update</p>
          </div>
        </ReusableForm>

    </>
  )
}

export default App
