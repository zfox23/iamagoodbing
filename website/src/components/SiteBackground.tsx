import { Transition } from '@headlessui/react';
import React from 'react';

export enum SiteBackgroundStyles {
    Images = "images",
    Words = "words"
}

export const SiteBackground = ({ bgStyle }) => {
    return (
        <>
            <Transition
                className='fixed -inset-4 text-slate-900/5 text-sm text-justify tracking-wide z-10 cursor-default'
                show={bgStyle === SiteBackgroundStyles.Images}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="linear duration-0"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">

            </Transition>
            <Transition
                className='fixed -inset-4 text-slate-900/5 text-sm text-justify tracking-wide z-10 cursor-default'
                show={bgStyle === SiteBackgroundStyles.Words}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="linear duration-0"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <p>
                    Magnis semper nibh in porta curae; cum placerat hendrerit ullamcorper pretium semper. Odio senectus nunc, mollis fermentum. Orci penatibus ridiculus nulla nec. Ultrices etiam tempor nulla montes. Tellus egestas viverra primis tincidunt libero natoque nam aliquet. Non fusce proin suscipit ipsum sodales elementum. Nostra ad aenean porttitor dignissim arcu ridiculus natoque quisque aliquet nunc!
                </p>
                <p>
                    Vivamus morbi magnis quis posuere sollicitudin purus ridiculus. Id aenean torquent pharetra semper lacus fermentum torquent mauris, per massa mattis. Pellentesque facilisi euismod ridiculus tempor. Tempus ad habitant dis penatibus. Pretium libero et lobortis euismod phasellus imperdiet lacus diam dictum sit litora sociosqu! Non vel volutpat integer. Luctus pulvinar tempus semper lacus sed lacus vitae gravida molestie platea erat. Taciti volutpat fringilla potenti cubilia. Felis elit vehicula pretium nisi cras himenaeos rhoncus dui bibendum per cubilia felis. Sed posuere penatibus dignissim curabitur porttitor justo est viverra feugiat consequat cubilia. Tortor diam lorem hendrerit varius tristique taciti praesent molestie magna. Curae; habitasse class etiam morbi malesuada scelerisque rutrum curabitur.
                </p>
                <p>
                    Aptent faucibus dictum orci aliquam parturient proin consectetur tempus dignissim natoque parturient bibendum. Mattis risus aliquam lacinia. Ad suspendisse scelerisque ullamcorper sagittis dictumst proin etiam. Fringilla tortor sem nisl nascetur mollis ullamcorper. Blandit, vivamus pulvinar tristique. Fusce, elit placerat class leo. Porta netus nisi rutrum nibh metus interdum posuere, senectus lacus donec. Leo risus imperdiet praesent. Felis platea nibh viverra sapien? Erat netus nulla nibh primis porttitor tempor auctor inceptos quam. In eu pretium phasellus auctor scelerisque. Nibh enim sem amet himenaeos penatibus orci habitasse cubilia mauris. Cum integer dignissim; himenaeos feugiat. Metus vivamus ullamcorper rhoncus orci nec habitant mus massa posuere magna. Sollicitudin aliquet orci pharetra augue cubilia erat dictum natoque velit quam. Non!
                </p>
                <p>
                    Nascetur tempus porta sem etiam mi at justo sed habitant molestie. Eleifend suspendisse fusce congue risus venenatis. Sociis cum condimentum urna senectus senectus nostra curabitur cursus porta. Ultrices; consectetur ultrices justo nam dui. Suscipit quam dictumst metus senectus praesent. Proin fusce, nostra bibendum pulvinar tempus cubilia tellus? Accumsan mollis praesent non porttitor morbi. Dignissim id gravida adipiscing urna lobortis luctus non justo elit. Primis dictumst volutpat adipiscing eu. Volutpat suspendisse hendrerit cras felis. Sodales mauris tortor euismod. Himenaeos fringilla imperdiet maecenas neque semper hac eget malesuada urna. Felis sapien nunc placerat lorem nulla dui nisl nam orci mauris sit nibh! Pharetra, nibh gravida imperdiet dictum natoque iaculis cum placerat congue porttitor nascetur euismod. Per mattis nostra feugiat netus fermentum lobortis platea consectetur praesent tristique libero. Amet at duis dignissim libero inceptos mollis pulvinar habitasse! Parturient consequat vestibulum litora tellus netus nullam facilisi malesuada! Mus ultricies semper facilisis nullam egestas.
                </p>
                <p>
                    Natoque nunc tincidunt habitasse nam. Molestie elit ultricies at himenaeos posuere natoque quam iaculis suscipit non habitasse. Lobortis consequat aliquam sagittis netus euismod eget tortor iaculis vel. Torquent sociosqu nullam condimentum torquent. Sapien molestie orci conubia ultrices pharetra porttitor commodo diam metus. Proin cras proin cras a lorem feugiat vestibulum lorem; condimentum porta cursus eleifend. Accumsan dis purus neque libero venenatis porttitor dignissim maecenas sociosqu quam odio phasellus. Potenti scelerisque adipiscing metus sagittis vehicula ridiculus facilisis! Consequat massa primis mattis. Primis semper proin est per tristique nullam class consectetur natoque dictumst! Aptent sodales fusce hac! Taciti velit, purus quisque malesuada placerat vitae leo bibendum eleifend maecenas? Felis in odio varius facilisis ante etiam sit.
                </p>
                <p>
                    Ullamcorper habitasse euismod ipsum justo velit nam curabitur nam. Viverra ipsum bibendum dolor eget penatibus sapien non. Rhoncus aenean lacus praesent purus dis, condimentum nullam pretium parturient tempus amet. Arcu, congue dapibus dapibus auctor rutrum urna malesuada aliquet vitae enim accumsan. Cursus lacus proin, ullamcorper diam. Eget turpis ut platea in ligula penatibus blandit dictumst torquent facilisis leo. Vulputate molestie turpis platea nunc sed montes ornare amet arcu iaculis sociosqu. Orci mollis eros luctus nascetur sem convallis nostra conubia? At facilisi auctor fusce, nullam donec. Eleifend phasellus congue dignissim per quam dictum malesuada habitasse. Parturient vivamus nostra ac facilisis at! Ipsum egestas amet sociosqu aptent. Commodo vehicula cum porttitor tempor per. Eu ultrices nulla vestibulum sem dignissim quis fames tincidunt inceptos taciti aliquam.
                </p>
                <p>
                    Nostra habitant odio ut elementum sodales mattis et ridiculus tristique. Hac pulvinar taciti aliquet pulvinar inceptos malesuada sagittis ultricies. Magnis fermentum class et parturient! Urna lobortis metus, aptent rutrum ipsum tellus nisi. Tellus tortor dignissim ad viverra tincidunt ullamcorper suscipit morbi nibh, ante mi. Fringilla placerat gravida taciti suspendisse. Tincidunt aliquet malesuada vulputate duis per pretium dignissim neque leo senectus turpis. Torquent penatibus magna commodo! Porttitor mus torquent magnis parturient bibendum commodo taciti himenaeos morbi!
                </p>
                <p>
                    Ut sollicitudin nulla elit est curabitur. Magna amet duis hac pharetra porta convallis posuere! Non convallis ut cursus vel tristique tempus sed mus molestie facilisis morbi. Congue dolor imperdiet ultricies rutrum duis, nascetur mus nisi eros luctus. Integer, mattis risus mi sociosqu nulla dictumst? Volutpat nostra penatibus himenaeos nulla rhoncus, erat malesuada? Nulla pulvinar quisque nec ultricies malesuada curabitur pellentesque morbi arcu! Maecenas iaculis vestibulum eleifend aliquam dictumst primis arcu nam scelerisque morbi gravida molestie. Condimentum nam sodales condimentum adipiscing nullam. Mattis eget platea aptent torquent volutpat pulvinar nisi nunc vulputate. Nunc, habitasse faucibus lacus nulla et litora faucibus imperdiet cras. Dui vehicula dignissim at adipiscing. Tristique vel ad leo. Diam nam auctor blandit etiam facilisi gravida risus.
                </p>
                <p>
                    Praesent dictum facilisi sociis nullam sapien vulputate? Mi vestibulum dapibus aliquet cursus enim rutrum scelerisque. Integer proin convallis mattis accumsan accumsan consectetur sociis pharetra leo netus adipiscing. Mauris ultrices lobortis, nibh platea feugiat semper placerat aenean rhoncus etiam euismod. Aliquam placerat lobortis mi ut faucibus lectus varius dui. Ultricies erat ultrices euismod hendrerit inceptos imperdiet cubilia commodo netus felis dapibus? Eu faucibus posuere senectus montes eu non! In est tortor tortor dui vel? Ligula semper cursus facilisi posuere rhoncus. Aliquam sociis taciti ullamcorper nostra a parturient nisl. Neque hendrerit semper aptent convallis suscipit taciti faucibus mollis tempus vivamus. Arcu amet faucibus; nisi tellus gravida adipiscing duis eget sit aenean dictumst. Aliquam hendrerit pulvinar nam, mauris rhoncus praesent natoque magnis. Ligula habitant erat facilisi facilisi rutrum risus sollicitudin condimentum. Condimentum iaculis penatibus.
                </p>
                <p>
                    Tempor per vestibulum tortor class ridiculus. Nibh duis eget massa quisque tortor praesent mus non. Vitae sem mus conubia, dolor quam nibh facilisis. Vitae varius enim, cum phasellus ipsum cras. Fames class hac nostra inceptos ultricies euismod quis sem mi tristique curae; facilisi. Eget vivamus consequat curae; tortor eleifend netus ullamcorper enim fames. Adipiscing et potenti nisl? Tempus congue nostra sem etiam fringilla pharetra proin magna dictumst? Mauris condimentum habitasse potenti viverra convallis turpis ac. Nec eleifend odio sollicitudin convallis pharetra.
                </p>
                <p>
                    Consequat ullamcorper nam varius ullamcorper risus imperdiet quisque eleifend facilisi sollicitudin nullam aptent. Auctor consectetur sociis eleifend suscipit eleifend eu neque pretium gravida dapibus. Semper ut dolor, ligula elementum magna potenti. Duis velit laoreet vulputate iaculis ante feugiat penatibus porta. Aenean ante varius cubilia elementum nam sit hac a posuere litora lorem? Vehicula lacinia nam eu enim urna bibendum natoque nibh maecenas maecenas. Pulvinar lacus quam, rutrum felis mollis ad in gravida erat phasellus. Tristique primis nibh parturient dictumst curabitur integer. Elementum enim ultrices urna pretium phasellus tincidunt lacinia netus ultricies, malesuada enim. Potenti convallis torquent praesent interdum volutpat magna facilisi. Lobortis justo potenti non aliquet congue tempus eget! Luctus parturient sollicitudin pulvinar leo pellentesque sociis venenatis neque. Aptent vulputate velit!
                </p>
                <p>
                    Lorem tincidunt torquent dignissim rutrum cum litora libero netus. Eleifend auctor rhoncus interdum curae; nibh purus et scelerisque non tempus dictumst himenaeos. Suspendisse torquent id eleifend elementum integer sollicitudin volutpat ipsum massa. Sociis nullam semper risus quis sapien ultricies netus class urna molestie iaculis. Imperdiet etiam placerat vulputate convallis quis quam euismod nulla.
                </p>
                <p>
                    Per vivamus molestie in id dapibus, facilisi fringilla. Fames nullam auctor condimentum consequat aenean aenean nullam vestibulum ut praesent! Himenaeos aliquam eget suscipit donec mollis praesent posuere molestie mollis torquent ornare. Turpis senectus torquent vulputate! Torquent augue mattis facilisi posuere et pulvinar? Volutpat curae; ultrices euismod congue id vivamus sit lacus vitae curae; faucibus. A interdum habitant rutrum tempor leo. Lacus pretium magnis eros condimentum fames volutpat ullamcorper nascetur. Hendrerit phasellus quam semper molestie dapibus ultrices nulla dignissim elit. Eget dictum parturient primis per consequat suscipit, lacus et orci nisl. Lectus sociis donec dictumst nascetur quis magna urna ipsum class convallis. Litora suspendisse semper rhoncus ante tempus lacus litora montes viverra amet quam fringilla. Ac aenean montes cursus neque commodo class vulputate volutpat facilisis integer, dolor bibendum. Odio sapien pulvinar leo?
                </p>
                <p>
                    Accumsan eleifend purus pretium ultricies! Sem aptent libero conubia curae; fames vehicula est elit lorem! Lectus augue sit scelerisque duis praesent venenatis ad; sapien cum commodo malesuada maecenas. Massa eleifend lacus sollicitudin penatibus sodales tincidunt egestas nec. Risus consequat sollicitudin iaculis. At amet varius, cubilia at lacus himenaeos fermentum? Lorem tortor penatibus lacinia senectus integer.
                </p>
                <p>
                    Conubia ac nec interdum ullamcorper aliquet sem aliquam nulla dui rhoncus viverra. Magnis dignissim erat nunc massa scelerisque blandit quam etiam taciti. Torquent dictum sodales aptent eu laoreet eleifend duis. Quis platea magnis placerat dignissim eros tempus congue porttitor felis molestie aliquet cum. Phasellus mi vestibulum sagittis, quis elit gravida tellus malesuada nascetur ac. Porttitor, id lacinia litora ante fermentum. Urna sed aliquet dictum interdum per! Imperdiet blandit fusce suspendisse nascetur quisque natoque lectus magnis augue ornare quam. Sit convallis vulputate tincidunt mollis cum vehicula adipiscing cursus, magna cursus. Purus hendrerit, gravida vestibulum. Duis lorem nunc, eleifend interdum eros gravida velit nunc lectus nullam eros? Ullamcorper cras per, lectus class etiam curae;. Sed ligula platea mi posuere nisl eu. Donec hendrerit, montes himenaeos suscipit tempor.
                </p>
                <p>
                    Porta senectus, nascetur dolor litora vestibulum! Morbi curae; tortor varius placerat libero sit quisque. Odio lectus maecenas luctus magnis mattis eget blandit est elementum facilisis magna integer. Fermentum cras pretium nostra pellentesque dolor ut ipsum dictum eleifend. Lacinia senectus euismod aenean rutrum mollis lectus suspendisse taciti volutpat ultrices interdum sagittis! Porta mus habitasse sollicitudin natoque, feugiat id. Mi commodo condimentum curabitur in penatibus semper suscipit fames. Risus duis duis porta class vestibulum gravida vitae. Cum lacus scelerisque lobortis convallis nec lorem! Praesent maecenas aptent, at magnis senectus non dapibus feugiat interdum est nisi. Praesent, commodo venenatis metus dictumst curae;? Pellentesque nisi ut venenatis iaculis parturient duis vehicula tempor litora ut. Scelerisque elementum lobortis eros purus etiam rutrum. Ad turpis urna montes commodo dictum accumsan donec condimentum faucibus! Torquent netus commodo fermentum mollis. Proin, dolor posuere in. Cubilia nulla cras penatibus sociosqu conubia magna blandit eros donec duis.
                </p>
                <p>
                    Potenti ornare aliquam elementum, himenaeos montes integer. Nam lacus nostra faucibus rhoncus neque pharetra class ultricies tristique ultrices ultricies. Rhoncus vehicula curae; nostra placerat platea suspendisse a suspendisse molestie aliquet. Mi fermentum eu aliquet nunc. Lacinia congue tortor eget. Porttitor morbi turpis pretium magnis neque. Sollicitudin purus vitae semper laoreet lacinia, bibendum fringilla justo! Egestas phasellus nisi torquent, dapibus dolor nec. Taciti nibh fringilla ac. Facilisi blandit primis dictum congue natoque viverra dictum porttitor mi. Nullam pretium praesent maecenas donec donec sapien. Varius cursus dictum mollis convallis parturient, porta class. Tempus sagittis nec tellus nullam ac risus purus sociis diam fames eros. Quam porttitor.
                </p>
                <p>
                    Aenean elit ante sodales tempus elit neque ultrices quam dapibus at aliquam consectetur. Cubilia quis scelerisque arcu, porta metus mollis. Orci iaculis per phasellus turpis commodo imperdiet habitant. Curabitur fringilla cras scelerisque pellentesque fames maecenas faucibus justo nam vivamus lectus. Cursus faucibus sed nulla. Luctus eget sociis purus curabitur varius convallis eu elementum sit, rhoncus dignissim. Suscipit metus blandit mollis condimentum id egestas suscipit curabitur imperdiet gravida dignissim? Mollis suspendisse malesuada vitae imperdiet non nulla vehicula pharetra. Semper duis lacus montes tellus ipsum erat ultricies netus.
                </p>
                <p>
                    Vel primis placerat vestibulum dolor nisi fringilla himenaeos hendrerit. Maecenas erat rutrum platea risus facilisis eleifend amet fermentum! Netus cras molestie laoreet turpis pharetra quam arcu habitasse morbi lobortis! Ligula dapibus eget turpis risus per odio vitae nostra. Eget odio laoreet etiam ac hendrerit nec vulputate id neque erat. Tellus, suscipit natoque arcu praesent! Nullam ultrices accumsan mattis lectus posuere, eget dapibus mollis in scelerisque imperdiet nibh. A tempus pretium faucibus facilisis amet est congue! Nisl malesuada mollis vestibulum vestibulum? Senectus montes commodo et cum! Nec sit condimentum, netus magnis gravida a etiam!
                </p>
                <p>
                    Amet nascetur fusce pharetra pulvinar eget justo ligula sagittis taciti consectetur. Suspendisse convallis nullam dui eros montes est dapibus felis dui. Phasellus adipiscing lorem mattis ligula eget hac integer cras himenaeos! Elit nullam neque adipiscing ut fusce venenatis? A augue iaculis convallis? Mattis iaculis nec, proin nisl interdum massa. Eu semper vulputate enim ullamcorper litora tempus litora lacus venenatis. Proin dignissim ultricies etiam varius fusce etiam senectus tempus luctus leo.
                </p>
            </Transition>
        </>
    )
}
