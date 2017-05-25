const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');

const server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, '/dist/views')
            }
        }
    }
});
server.connection({ port: 8000 });

server.register(Inert, () => {});

server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          path: '/dist/views',
          index: ['userform.html']
        }
      }
    });

server.start((err) => {

    if (err) {
        throw err;
    }

    console.log('Server running at:', server.info.uri);
});