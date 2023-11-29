function skillsMember(){
    return{
        restrict: 'E',
        templateURL: 'modules/skills/views/member.html',
        controller: 'vm',
        bindToController: true, 
        scope: {
            member: '='
        }
    };
}