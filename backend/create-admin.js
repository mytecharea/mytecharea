const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('./models/User');

require('dotenv').config();

const createAdmin = async () => {

  try {

    await mongoose.connect(process.env.MONGODB_URI);

    console.log('MongoDB connected');

    const email = 'admin@mytecharea.com';

    const existingUser = await User.findOne({
      email
    });

    if (existingUser) {

      console.log(
        'User already exists:',
        email
      );

      process.exit(0);
    }


    const hashedPassword =
      await bcrypt.hash(
        'Admin@12345',
        10
      );


    const admin = await User.create({

      name: 'Niraj Kumar',

      email: email,

      password: hashedPassword,

      role: 'admin'

    });


    console.log(
      'Admin created successfully'
    );

    console.log({
      id: admin._id,
      name: admin.name,
      email: admin.email,
      role: admin.role
    });

    process.exit(0);

  } catch (error) {

    console.error(
      'Error creating admin:',
      error
    );

    process.exit(1);

  }

};

createAdmin();