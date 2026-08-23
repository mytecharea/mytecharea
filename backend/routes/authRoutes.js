const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

const {
  authenticateToken
} = require('../middleware/authMiddleware');

const router = express.Router();


// ======================================================
// GET CURRENT USER
// GET /api/auth/me
// ======================================================

router.get(
  '/me',
  authenticateToken,
  async (req, res) => {

    try {

      const user = await User.findById(
        req.user.userId
      ).select('-password');


      if (!user) {

        return res.status(404).json({
          success: false,
          message: 'User not found'
        });

      }


      res.status(200).json({

        success: true,

        data: {

          id: user._id,

          name: user.name,

          email: user.email,

          role: user.role

        }

      });

    } catch (error) {

      console.error(
        'Get current user error:',
        error
      );

      res.status(500).json({

        success: false,

        message:
          'Unable to get user information'

      });

    }

  }
);


// ======================================================
// REGISTER USER
// POST /api/auth/register
// ======================================================

router.post(
  '/register',
  async (req, res) => {

    try {

      const {
        name,
        email,
        password
      } = req.body;


      // Validate input

      if (
        !name ||
        !email ||
        !password
      ) {

        return res.status(400).json({

          success: false,

          message:
            'Name, email and password are required'

        });

      }


      // Check existing user

      const existingUser =
        await User.findOne({
          email: email.toLowerCase()
        });


      if (existingUser) {

        return res.status(409).json({

          success: false,

          message:
            'User already exists'

        });

      }


      // Hash password

      const hashedPassword =
        await bcrypt.hash(
          password,
          10
        );


      // Create user

      const user =
        await User.create({

          name,

          email:
            email.toLowerCase(),

          password:
            hashedPassword,

          role: 'user'

        });


      res.status(201).json({

        success: true,

        message:
          'User registered successfully',

        data: {

          id: user._id,

          name: user.name,

          email: user.email,

          role: user.role

        }

      });

    } catch (error) {

      console.error(
        'Registration error:',
        error
      );

      res.status(500).json({

        success: false,

        message:
          'Registration failed'

      });

    }

  }
);


// ======================================================
// LOGIN
// POST /api/auth/login
// ======================================================

router.post(
  '/login',
  async (req, res) => {

    try {

      const {
        email,
        password
      } = req.body;


      // ------------------------------------------
      // 1. Validate input
      // ------------------------------------------

      if (
        !email ||
        !password
      ) {

        return res.status(400).json({

          success: false,

          message:
            'Email and password are required'

        });

      }


      // ------------------------------------------
      // 2. Find user
      // ------------------------------------------

      const user =
        await User.findOne({

          email:
            email.toLowerCase()

        });


      if (!user) {

        return res.status(401).json({

          success: false,

          message:
            'Invalid email or password'

        });

      }


      // ------------------------------------------
      // 3. Compare password
      // ------------------------------------------

      const isPasswordValid =
        await bcrypt.compare(
          password,
          user.password
        );


      if (!isPasswordValid) {

        return res.status(401).json({

          success: false,

          message:
            'Invalid email or password'

        });

      }


      // ------------------------------------------
      // 4. Create JWT
      // ------------------------------------------

      const token =
        jwt.sign(

          {

            userId:
              user._id.toString(),

            email:
              user.email,

            role:
              user.role

          },

          process.env.JWT_SECRET,

          {

            expiresIn:
              process.env.JWT_EXPIRES_IN ||
              '1h'

          }

        );


      // ------------------------------------------
      // 5. Send response
      // ------------------------------------------

      res.status(200).json({

        success: true,

        message:
          'Login successful',

        data: {

          token,

          user: {

            id:
              user._id,

            name:
              user.name,

            email:
              user.email,

            role:
              user.role

          }

        }

      });

    } catch (error) {

      console.error(
        'Login error:',
        error
      );

      res.status(500).json({

        success: false,

        message:
          'Login failed'

      });

    }

  }
);


module.exports = router;