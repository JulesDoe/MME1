<?php
class Serie
{
    public $name;
    public $beschreibung;
    public $imgsource;
    public $episodes;

    function Serie($name, $beschreibung, $imgsource)
    {
        $this->name = $name;
        $this->beschreibung = $beschreibung;
        $this->imgsource = $imgsource;
        //$this->episodes = $episodes;
        //$this->episodes = array(array(false,false,false,false,true),
        //                  array(false,false,false,false,true,false,true),
        //                  array(false,false,false,false,false));

    }


    function getAnzahlStaffeln()
    {
        return count($this->episodes);
    }

    function getAnzahlEpisodes($Staffel)
    {
        if ($Staffel > $this->getAnzahlStaffeln())
            return 0;
        return count($this->episodes[$Staffel]);
    }
}

?>