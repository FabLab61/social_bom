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
  $r->route('/')->to('example#index');

  $r->route('/new')->to('example#new_bom');
  $r->route('/add')->to('example#add_item');
  $r->route('/testdb')->to('example#test_db');
}

1;
