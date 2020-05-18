Update user in strapi which is in built plugin

Custom Update

strapi.query('user', 'users-permissions').update({ _id:  ctx.state.user.id},
			  {
			    password: hashedPasword,
			  }
			);

// Get Users
strapi.plugins['users-permissions'].services.user.fetchAll()
