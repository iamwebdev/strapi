const { loggedInId, isAdmin = false } = await strapi.plugins[
        'users-permissions'
      ].services.jwt.getToken(ctx);
