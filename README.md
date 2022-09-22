------------------------------Node handson-3---------------------

1. What is Middlewares?

ans:

1] Middleware is software that provides a bridge between operating systems and the applications that run on them, behaving as a discreet transition layer. So, middleware acts as the “middleman,” facilitating communication, bridging the gaps between tools, databases, and applications, and ultimately providing unified services to end-users.

2] Middleware is also known as “plumbing” since it connects two applications so they can pass data back and forth like through a pipeline. It’s especially useful for organizations that employ containerized or multi-cloud environments.


//Types of Middlewares//

1. Global Middlewares[app.use]
------->
1> All routes will be accessed in global middlewares.
2>In Global Middlewares,thats time app.use method is used.

2. Local Middlewares[app.get]
------->
1>Specific route can be used in LocalMiddlewares.
2>In Local Middlewares,thats time app.get method is used.

==================================================================