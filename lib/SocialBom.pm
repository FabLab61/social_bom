package SocialBom;
use Mojo::Base 'Mojolicious';
use Mojolicious::Commands;


# This method will run once at server start
sub startup {
  my $self = shift;

  # Documentation browser under "/perldoc"
  $self->plugin('PODRenderer');

  # Routes
  my $r = $self->routes;

  # Normal route to controller
  $r->route('/')->to('example#welcome');
}

1;
