import admin from 'firebase-admin';
import { applicationDefault, cert } from 'firebase-admin/app';


// import secretJSON from './secret.json';



if (!admin.apps.length) {
  try {
    admin.initializeApp({
      // credential: applicationDefault(),

credential: cert({
  // privateKey:process.env.NEXT_PUBLIC_PRIVATEKEY,
  // clientEmail:process.env.NEXT_PUBLIC_CLIENTEMAIL,
  // projectId:process.env.NEXT_PUBLIC_PROJECTID,

privateKey:"-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCa2NVHPmmgeZA7\noolzru84f70WJa1xOjTCZEpzM9h5lsRCQtcMPIIuFVrVOsXFE/kI65dgyKsO5O/1\nP78cPXLsjNwp4WQ7zXuSDI/0rp6P0NP6RUxhv3Sj/cKgLXyG5yQ5v8XolPpEt2/e\ndnzb0LVhRDyg+p/oTISyiRt6GVCKwlaU9LhVnjX7fq/MCM5htvxkeYj3fSZ/oRzH\nG8Qs451UE4PX+a9X5T3paPyA584N4LB6cRQMlWkB0f8+n4D7iswkc6vU1pNLA2GS\n/PZVpyrLW1EWt1Slf8Or7cY+IDNVv5SBml40gxn2ZbFT8va6ZZjdTYYRc0WziU6o\nYUavaZlNAgMBAAECggEABC0+nYAXucolo5IoCnyIu9moOEl2YvQ6uZaacn6Ow4LX\nUuE6KzyTl1ogm9lMvdri0ASIzgXDpXBz74XTahfXOn23L5MCkOFjSKZ5mJRANylf\nGmRVodpX81d0MT1g20OvVLZxSGuCT6myBQplpkk8Jz4/s2jnOM0dlDJCETpPE5sN\nHF1obALBDXgxqAjx7rVbXj0Mi7J80LsrSGcgiNkMDCEuqTxo/viTpWgRhZm7cJaN\n6WJ5bAGjMKESXIMEqPCeMO0RSAAUAs6KIkFIK31JWDfQbxDh71M4vaARS2M1ZgnW\nrfPwD8BKrmtu/4Q1kV5npSyKUe2oSagsn8HGGH4SiQKBgQDJ7xxzq1Yly5O+HKZ8\n3HQFyNEOliWiDGP82E60Gxq0ef0NvVpQ11Y4fEpTPxM1VKLVbbiE/QMV/a9O7+Qp\nhMDD+W5aNRa874hAu8mfCcoep9blH0oxmql/QtzZlSX7Eu/vNlQCNhRxY6mPBAPS\np+TPjy3xtnR3T/LpFa4WZvrzmQKBgQDETkzgbW7UKhbgtVfS7as4adpmEfo3oRyc\ngEhY4TkfIfS/096DDKiQfTMXOJkI6QgzeB6Ab+cDgmC+fM0Ojgc7+Ewj9e+Nh/f4\nEXcgTI7DAW0VkHz1QAjVwZz5Voo8IqCe/Q6Hxgwe0l2CFGJnJbtBDqqtTgBU6iC6\nhKGdXScj1QKBgBUbOvwUEoMMzjp2wCgY2r+oB8Hgi7puVR0edst4ccgfYAXJnuEI\nQOjShOpCk31lhUeNmlW8JFBuHZ7AkDaOu59AOPqQxfmlh7ZManyHB2tA28NDC/w3\nUDQPBwpu/nNJvW5hXVKF2Ikpg5WBM+0Ww2G2c3TqPy4hWyBltbZ9uQkxAoGAa1gZ\nx7tvmErvua7QOIJIV4/iomAAQH00RQwNA7Uc5D5QNLlpeqXoYyJjVrZXUL0FBAgS\nPc9zNsMLnf5mryfRIuTy1dM9TFpmqVr7lkjm5BGakekxu3ZpnmHCMcI10w5oYKgm\nUu5kYFJOWbxF1vuV+sxHXn9BxS1F+lhee8udhIUCgYB2MPuax7cSF/nTVbWhH+ln\nbpjmQuE0H+2pUr/sf34OBAgKLLfEoYFkxWCRR/EWBBaZmDBHtxUxUd08au3xIXMc\nZH4QiNim1c3OXz/DEIx/H9g/WLdQaFBm1LdxackkwxK5h6QqYEb+9qW+ujaluxHW\nOGTKjjrQMz88i2s2P/1vQg==\n-----END PRIVATE KEY-----\n",

clientEmail:'firebase-adminsdk-vwhc6@social-media-e9998.iam.gserviceaccount.com',

projectId:'social-media-e9998'



}),

      databaseURL: "https://social-media-e9998-default-rtdb.firebaseio.com"

    });

  } catch (error) {
    console.log(error);
  }


}


export default admin;