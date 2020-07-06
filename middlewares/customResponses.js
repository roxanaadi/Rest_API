const customResponses = {

  success( payload ) {
      return this.status( 200 ).json( {
          success: true,
          payload,
      } );
  },
  notFound( ) {
      return this.status( 404 ).json( {
          success: false,
          error: "not_found",
          details: "The resource you are looking for was not found",
      } );
  },
  serverError() {
      return this.status( 503 ).json( {
          success: false,
          error: "server_error",
          details: "Server error"
      } );
  },
  customedError( payload ) {
      return this.status( 400 ).json( {
          success: false,
          error: "bad_request",
          details: payload,
      } );
  }
}

module.exports = ( req, res, next ) => {
      Object.assign( res, customResponses );
      next( );
};
      
