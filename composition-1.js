// komposisi
fun main() {
    ...
    val user = User(id = 1234, name = 'Puteri', address = Address('123,' 'Palembang'))
}

class User(
    private val id: String,
    private val name: String,
    private val address: Address
)

class Address(
    Private val id: String,
    private val location: String
)