const CONTACT_DETAILS = {
'Cann Hall': { 'phone': null, 'email': 'cannhallmutualaid@gmail.com' },
'Cathall': { 'phone': '07926432520', 'email': 'cathall.mutual.aid@gmail.com' },
'Chapel End': null,
'Chingford Green': { 'phone': null, 'email': 'Chingfordgreenmutualaid@gmail.com' },
'Endlebury': { 'phone': '020 31373908', 'email': 'chingfordcorona@gmail.com' },
'Forest': { 'phone': '07515637649', 'email': 'forestwardmutualaid@gmail.com' },
'Grove Green': { 'phone': '07933057684', 'email': 'Grovegreenmutualaid@gmail.com' },
'Hale End and Highams Park': { 'phone': '07424807762', 'email': 'highamsparkcovid19@gmail.com' },
'Hatch Lane': null,
'High Street': { 'phone': '07516922035', 'email': 'e17highstmutualaid@gmail.com' },
'Higham Hill': { 'phone': '07309409285', 'email': 'highamhillmutualaid@gmail.com' },
'Hoe Street': { 'phone': '07566767950', 'email': 'hoestreetmutualaid@gmail.com' },
'Larkswood': { 'phone': '07546155654', 'email': 'larkswoodcovid19@gmail.com' },
'Lea Bridge': null,
'Leyton': { 'phone': '07497620579 or 07446258318', 'email': 'leytonmutualaid@gmail.com' },
'Leytonstone': { 'phone': '07933521407', 'email': 'leytonstone.mutual.aid@gmail.com' },
'Markhouse': { 'phone': null, 'email': 'Friendsofstjamespark@gmail.com' },
'Valley': null,
'William Morris': { 'phone': '07305960259', 'email': 'Williammorriscovid@gmail.com' },
'Wood Street': null,
};

const search = (postcode, handler) => {
  axios.get(`https://api.postcodes.io/postcodes/${postcode}`).then(response => {
    try {
    const ward = response.data.result.admin_ward
    handler([ward, CONTACT_DETAILS[ward]]);
    } catch (e) {
      alert(`we couldn't find your ward. is your postcode correct and in waltham forest?`);
    }
  }).catch(e => {
      alert(`we couldn't find your ward. is your postcode correct and in waltham forest?`);
  });
};

const Foo = () => {
  const [contactInfo, setContactInfo] = React.useState(null);
  return (
    <div className="row mb-3">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body" style={{minHeight: '320px'}}>
            <h3 className="card-title">IF YOU NEED HELP</h3>
            <p>Each ward of Waltham Forest has its own independent mutual aid group.</p>
            {contactInfo
              ? (
                <div>
                  <p>Your local group is <strong>{contactInfo[0]} Mutual Aid</strong>.</p>

                  <p>{contactInfo[1] && contactInfo[1].phone ? `Phone: ${contactInfo[1].phone}` : ''}</p>

                  <p>{contactInfo[1] && contactInfo[1].email ? `Email: ${contactInfo[1].email}` : ''}</p>

                  <p>{!contactInfo[1] ? `We do not have this group's contact details - please email us at walthamforestmutualaid@gmail.com and we will try to put you in touch.` : ''}</p>

                <button type="submit" className="card-button btn btn-primary" onClick={() => setContactInfo(null)}>Close</button>
                </div>
              )
              : (
            <form onSubmit={e => {  e.preventDefault(); search(e.target.postcode.value, setContactInfo); } }>
              <div className="form-group">
                <label htmlFor="postcode">Enter your postcode to find the contact details of your local group.</label>
                <input autoFocus className="form-control" type="text" id="postcode" name="postcode" placeholder="Your postcode" />
                <p className="mt-2">Or see <a href="/groups">the full list</a>.</p>
                <button type="submit" className="card-button btn btn-primary">Search</button>
              </div>
            </form>
              )}
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body" style={{minHeight: '320px'}}>
            <h3 className="card-title">IF YOU WANT TO HELP</h3>
            <p>Each ward of Waltham Forest has its own independent mutual aid group.</p>
            <p>Fill in <a href="https://forms.gle/NUYUvw7Sspwtbxp38">this form</a> and someone from your local group will get back to you.</p>
            <a href="https://forms.gle/NUYUvw7Sspwtbxp38" target="_blank" className="card-button btn btn-primary">Fill in form</a>
          </div>
        </div>
      </div>
      <div className="col-md-6 mt-3">
        <p><strong>Why can't I need help AND want to help?</strong></p>
        <p>You can!</p>
        <p>Mutual aid is about us all helping <em>each other</em>, not about one group of people helping another, separate group of people.</p>
        <p>This is one of the fundamental differences between mutual aid and charity.</p>
        <p>We keep requests for help separate from people making offers of help only to help us protect the information of our more vulnerable friends and neighbours.</p>
        <p>Please use both options above if you need help but also want to help others.</p>
      </div>
      <div className="col-md-6 mt-3">
        <img src="/img/paste.png" style={{width: '100%'}} />
      </div>
    </div>
  );
};


const Bar = () => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Ward</th>
          <th>Phone number</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(CONTACT_DETAILS).map(k => (
          <tr>
            <td>{k}</td>
            <td>{CONTACT_DETAILS[k] && CONTACT_DETAILS[k].phone}</td>
            <td>{CONTACT_DETAILS[k] && <a href={`mailto:${CONTACT_DETAILS[k].email}`}>{CONTACT_DETAILS[k].email}</a>}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const domContainer1 = document.querySelector('#groups-table');
domContainer1 && ReactDOM.render(<Bar />, domContainer1);

const domContainer2 = document.querySelector('#react-container');
domContainer2 && ReactDOM.render(<Foo />, domContainer2);
