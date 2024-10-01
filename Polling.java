import javax.persistence.*;
import java.util.Date;

@Entity
public class Polling {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String partyName;

    @Column(nullable = false)
    private String evId;

    @Column(nullable = false)
    private String votingId;

    @Temporal(TemporalType.TIMESTAMP)
    private Date polledOn;

    // Getters and Setters
}
