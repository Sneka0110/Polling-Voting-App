import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PollingController {

    @Autowired
    private PollingRepository pollingRepository;

    @Autowired
    private PartyRepository partyRepository;

    @GetMapping("/results")
    public List<Polling> getResults() {
        return pollingRepository.findAll().stream().limit(50).toList();
    }

    @PostMapping("/registerParty")
    public Party registerParty(@RequestBody Party party) {
        return partyRepository.save(party);
    }

    @PostMapping("/vote")
    public Polling vote(@RequestBody Polling polling) {
        return pollingRepository.save(polling);
    }
}
