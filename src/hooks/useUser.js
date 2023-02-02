// import axios from 'axios';
// import { useState, useEffect } from 'react';

// export default function useUser(userId) {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(`http://localhost:3000/user/${userId}`)
//       .then((response) => {
//         setData(response.data);
//         setLoading(false);
//       })
//       .catch((e) => {
//         setError(e);
//         setLoading(false);
//       });
//   }, [userId]);

//   return { data, error, loading };
// }
