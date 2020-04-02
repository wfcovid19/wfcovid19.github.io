const CONTACT_DETAILS = {
'Cann Hall': { 'phone': {}, 'email': 'cannhallmutualaid@gmail.com' },
'Cathall': { 'phone': '07926432520', 'email': 'cathall.mutual.aid@gmail.com' },
'Chapel End': {},
'Chingford Green': { 'phone': {}, 'email': 'Chingfordgreenmutualaid@gmail.com' },
'Endlebury': { 'phone': '020 31373908', 'email': 'chingfordcorona@gmail.com' },
'Forest': { 'phone': '07515637649', 'email': 'forestwardmutualaid@gmail.com' },
'Grove Green': { 'phone': '07933057684', 'email': 'Grovegreenmutualaid@gmail.com' },
'Hale End and Highams Park': { 'phone': '07424807762', 'email': 'highamsparkcovid19@gmail.com' },
'Hatch Lane': {},
'High Street': { 'phone': '07516922035', 'email': 'e17highstmutualaid@gmail.com' },
'Higham Hill': { 'phone': '07309409285', 'email': 'highamhillmutualaid@gmail.com' },
'Hoe Street': { 'phone': '07566767950', 'email': 'hoestreetmutualaid@gmail.com' },
'Larkswood': { 'phone': '07546155654', 'email': 'larkswoodcovid19@gmail.com' },
'Lea Bridge': { 'phone': '0208 539 0732 (12:30-3 tuesday-sat)', 'email': 'aid@loveleabridge.com' },
'Leyton': { 'phone': '07497620579 or 07446258318', 'email': 'leytonmutualaid@gmail.com' },
'Leytonstone': { 'phone': '07933521407', 'email': 'leytonstone.mutual.aid@gmail.com' },
'Markhouse': { 'phone': null, 'email': 'Friendsofstjamespark@gmail.com' },
'Valley': {},
'William Morris': { 'phone': '07305960259', 'email': 'Williammorriscovid@gmail.com' },
'Wood Street': {'facebook': 'https://www.facebook.com/groups/woodstmutualaid/'},
};

const DEFAULT_FORM = 'https://forms.gle/NUYUvw7Sspwtbxp38';

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
    <div className="row">
      {contactInfo
        ? (
          <div className="col-md-12">
            <div className="card">
              <div className="card-body" style={{textAlign: 'center'}}>
                <h3 className="card-title">Your local group is <strong>{contactInfo[0]} Mutual Aid</strong>.</h3>
                <div>
                  <p></p>

                      <h4 className="mb-3">If you need help</h4>

                      <p>{contactInfo[1] && contactInfo[1].phone ? `Phone: ${contactInfo[1].phone}` : ''}</p>

                      <p>{contactInfo[1] && contactInfo[1].email ? <span>Email: <a href={`mailto:${contactInfo[1].email}`} target="_blank">{contactInfo[1].email}</a></span> : ''}</p>

                      <p>{contactInfo[1] && contactInfo[1].facebook ? <span>Facebook: <a href={contactInfo[1].facebook} target="_blank">{contactInfo[1].facebook}</a></span> : ''}</p>
                      <h4 className="mb-3">If you want to help</h4>
                      <p>Fill in this form: <a href={contactInfo[1] ? contactInfo[1].form || DEFAULT_FORM : DEFAULT_FORM}>{contactInfo[1] ? contactInfo[1].form || DEFAULT_FORM : DEFAULT_FORM}</a></p>
                      <p>{contactInfo[1] && contactInfo[1].facebook ? <span>Join this Facebook group: <a href={contactInfo[1].facebook} target="_blank">{contactInfo[1].facebook}</a></span> : ''}</p>


                  <p>{Object.keys(contactInfo[1]).length === 0 ? `We do not have this group's contact details - please email us at walthamforestmutualaid@gmail.com and we will try to put you in touch.` : ''}</p>

                  <button type="submit" className="card-button btn btn-primary" onClick={() => setContactInfo(null)}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )
        : (
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">FIND YOUR LOCAL GROUP</h3>
                <p>Each ward of Waltham Forest has its own independent mutual aid group.</p>
                <p>Whether you <strong>need help</strong> or <strong>want to help</strong> - or both - enter your postcode to find the contact details of your local group.</p>
                <form onSubmit={e => {  e.preventDefault(); search(e.target.postcode.value, setContactInfo); } }>
                  <div className="form-group">
                    <input autoFocus className="form-control" type="text" id="postcode" name="postcode" placeholder="Your postcode" />
                    <p className="mt-2">Or see <a href="/groups">the full list</a>.</p>
                    <button type="submit" className="card-button btn btn-primary">Search</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      <div className="col-md-6 mt-3">
        <p><strong>Can I need help AND want to help?</strong></p>
        <p>Yes!</p>
        <p>Mutual aid is about us all helping <em>each other</em>, not about one group of people helping another, separate group of people.</p>
        <p>This is one of the fundamental differences between mutual aid and charity.</p>
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
          <th>Facebook</th>
          <th>Signup form</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(CONTACT_DETAILS).map(k => (
          <tr>
            <td>{k}</td>
            <td>{CONTACT_DETAILS[k] && CONTACT_DETAILS[k].phone}</td>
            <td>{CONTACT_DETAILS[k] && CONTACT_DETAILS[k].email && <a href={`mailto:${CONTACT_DETAILS[k].email}`}>{CONTACT_DETAILS[k].email}</a>}</td>
            <td>{CONTACT_DETAILS[k] && CONTACT_DETAILS[k].facebook && <a href={`${CONTACT_DETAILS[k].facebook}`}>{CONTACT_DETAILS[k].facebook}</a>}</td>
            <td><a href={CONTACT_DETAILS[k].form || DEFAULT_FORM}>{CONTACT_DETAILS[k].form || DEFAULT_FORM}</a></td>
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
