
<div id="login">
    <fieldset>Login
    <?php
    echo $this->Form->create();
    echo $this->Form->input(
            'email', array('label' => 'Username'));
//echo $this->Form->input("email");
    echo $this->Form->input('password');
    echo $this->Form->end('Login');
    ?>
    </fieldset>    
</div>
